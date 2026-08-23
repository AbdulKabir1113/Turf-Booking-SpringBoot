package com.turfbooking.service;

import com.turfbooking.dto.BookingResponse;
import com.turfbooking.dto.OwnerDashboardResponse;
import com.turfbooking.entity.Booking;
import com.turfbooking.entity.Turf;
import com.turfbooking.entity.User;
import com.turfbooking.repository.BookingRepository;
import com.turfbooking.repository.TurfRepository;
import com.turfbooking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class OwnerService {

    @Autowired
    private TurfRepository turfRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    /** Mirrors OwnerDAO.getDashboardData(). */
    public OwnerDashboardResponse getDashboardData(int ownerId) {

        OwnerDashboardResponse dashboard = new OwnerDashboardResponse();

        dashboard.setTotalTurfs((int) turfRepository.countByOwnerId(ownerId));
        dashboard.setTodaysBookings((int) bookingRepository.countTodaysConfirmedBookingsForOwner(ownerId));
        dashboard.setUpcomingBookings((int) bookingRepository.countUpcomingConfirmedBookingsForOwner(ownerId));
        dashboard.setTotalRevenue(bookingRepository.sumConfirmedRevenueForOwner(ownerId));

        // Recent bookings (top 5, newest first) - built the same way as getOwnerBookings()
        List<BookingResponse> recent = getOwnerBookings(ownerId);
        recent.sort(Comparator.comparing(BookingResponse::getBookingId).reversed());
        if (recent.size() > 5) {
            recent = recent.subList(0, 5);
        }
        dashboard.setRecentBookings(recent);

        return dashboard;
    }

    public List<Turf> getOwnerTurfs(int ownerId) {
        return turfRepository.findByOwnerIdOrderByTurfIdDesc(ownerId);
    }

    /** Mirrors OwnerDAO.getOwnerBookings() - joins users + turfs for each booking. */
    public List<BookingResponse> getOwnerBookings(int ownerId) {

        List<Turf> ownerTurfs = turfRepository.findByOwnerIdOrderByTurfIdDesc(ownerId);

        List<BookingResponse> result = new ArrayList<>();

        // Pull every booking for turfs owned by this owner
        List<Integer> ownerTurfIds = new ArrayList<>();
        for (Turf t : ownerTurfs) {
            ownerTurfIds.add(t.getTurfId());
        }

        List<Booking> allBookings = bookingRepository.findAll();

        for (Booking b : allBookings) {

            if (!ownerTurfIds.contains(b.getTurfId())) {
                continue;
            }

            Turf turf = ownerTurfs.stream()
                    .filter(t -> t.getTurfId() == b.getTurfId())
                    .findFirst()
                    .orElse(null);

            User customer = userRepository.findById(b.getUserId()).orElse(null);

            BookingResponse dto = new BookingResponse();
            dto.setBookingId(b.getBookingId());
            dto.setBookingDate(b.getBookingDate());
            dto.setSlotStart(b.getSlotStart());
            dto.setSlotEnd(b.getSlotEnd());
            dto.setTotalAmount(b.getTotalAmount());
            dto.setBookingStatus(b.getBookingStatus());

            if (turf != null) {
                dto.setTurfName(turf.getTurfName());
            }

            if (customer != null) {
                dto.setCustomerName(customer.getFullName());
                dto.setCustomerPhone(customer.getPhone());
            }

            result.add(dto);
        }

        result.sort(
                Comparator.comparing(BookingResponse::getBookingDate).reversed()
                        .thenComparing(BookingResponse::getSlotStart)
        );

        return result;
    }

    public User getOwnerProfile(int ownerId) {
        return userRepository.findByUserIdAndRole(ownerId, "OWNER").orElse(null);
    }
}
