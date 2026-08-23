package com.turfbooking.service;

import com.turfbooking.dto.BookingRequest;
import com.turfbooking.dto.BookingResponse;
import com.turfbooking.dto.SlotDTO;
import com.turfbooking.entity.Booking;
import com.turfbooking.entity.Turf;
import com.turfbooking.repository.BookingRepository;
import com.turfbooking.repository.TurfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TurfRepository turfRepository;

    public boolean isSlotAvailable(int turfId, Date bookingDate, Time slotStart, Time slotEnd) {
        return !bookingRepository.existsOverlappingBooking(turfId, bookingDate, slotStart, slotEnd);
    }

    public List<String> getBookedSlots(int turfId, Date bookingDate) {

        List<Booking> bookings =
                bookingRepository.findByTurfIdAndBookingDateAndBookingStatusNot(turfId, bookingDate, "CANCELLED");

        List<String> bookedSlots = new ArrayList<>();

        for (Booking b : bookings) {
            bookedSlots.add(b.getSlotStart() + " - " + b.getSlotEnd());
        }

        return bookedSlots;
    }

    /**
     * Mirrors BookSlotServlet: validates every requested slot is free,
     * splits the total amount evenly across the slots, and books each one.
     * Returns null on success, or an error message if any slot is taken.
     */
    public String bookSlots(BookingRequest request) {

        Date bookingDate = Date.valueOf(request.getBookingDate());
        double amountPerSlot = request.getTotalAmount() / request.getSlots().size();

        for (SlotDTO slot : request.getSlots()) {

            Time slotStart = Time.valueOf(slot.getSlotStart());
            Time slotEnd = Time.valueOf(slot.getSlotEnd());

            if (!isSlotAvailable(request.getTurfId(), bookingDate, slotStart, slotEnd)) {
                return "One or more slots are already booked.";
            }
        }

        for (SlotDTO slot : request.getSlots()) {

            Time slotStart = Time.valueOf(slot.getSlotStart());
            Time slotEnd = Time.valueOf(slot.getSlotEnd());

            Booking booking = new Booking(
                    request.getUserId(),
                    request.getTurfId(),
                    bookingDate,
                    slotStart,
                    slotEnd,
                    amountPerSlot,
                    "CONFIRMED"
            );

            bookingRepository.save(booking);
        }

        return null;
    }

    public boolean cancelBooking(int bookingId) {

        Optional<Booking> bookingOpt = bookingRepository.findById(bookingId);

        if (bookingOpt.isEmpty()) {
            return false;
        }

        Booking booking = bookingOpt.get();
        booking.setBookingStatus("CANCELLED");
        bookingRepository.save(booking);

        return true;
    }

    /** Mirrors BookingDAO.getBookingsByUserId() - joins in the turf details. */
    public List<BookingResponse> getBookingsByUserId(int userId) {

        List<Booking> bookings = bookingRepository.findByUserIdOrderByBookingDateDescSlotStartAsc(userId);

        List<BookingResponse> result = new ArrayList<>();

        for (Booking b : bookings) {

            Turf turf = turfRepository.findById(b.getTurfId()).orElse(null);

            BookingResponse dto = new BookingResponse();
            dto.setBookingId(b.getBookingId());
            dto.setUserId(b.getUserId());
            dto.setTurfId(b.getTurfId());
            dto.setBookingDate(b.getBookingDate());
            dto.setSlotStart(b.getSlotStart());
            dto.setSlotEnd(b.getSlotEnd());
            dto.setTotalAmount(b.getTotalAmount());
            dto.setBookingStatus(b.getBookingStatus());

            if (turf != null) {
                dto.setTurfName(turf.getTurfName());
                dto.setTurfLocation(turf.getLocation());
                dto.setCity(turf.getCity());
                dto.setThumbnailUrl(turf.getThumbnailUrl());
            }

            result.add(dto);
        }

        return result;
    }
}
