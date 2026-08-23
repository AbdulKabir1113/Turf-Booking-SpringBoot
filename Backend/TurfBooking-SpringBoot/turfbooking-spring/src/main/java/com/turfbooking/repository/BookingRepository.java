package com.turfbooking.repository;

import com.turfbooking.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

    List<Booking> findByUserIdOrderByBookingDateDescSlotStartAsc(int userId);

    /**
     * Mirrors BookingDAO.isSlotAvailable():
     * a slot is unavailable if there is a non-cancelled booking for the
     * same turf/date whose [slot_start, slot_end) overlaps the requested one.
     */
    @Query("SELECT COUNT(b) > 0 FROM Booking b " +
           "WHERE b.turfId = :turfId " +
           "AND b.bookingDate = :bookingDate " +
           "AND b.bookingStatus != 'CANCELLED' " +
           "AND :slotStart < b.slotEnd AND :slotEnd > b.slotStart")
    boolean existsOverlappingBooking(@Param("turfId") int turfId,
                                      @Param("bookingDate") Date bookingDate,
                                      @Param("slotStart") Time slotStart,
                                      @Param("slotEnd") Time slotEnd);

    List<Booking> findByTurfIdAndBookingDateAndBookingStatusNot(
            int turfId, Date bookingDate, String excludedStatus);

    @Query("SELECT COUNT(b) FROM Booking b JOIN Turf t ON b.turfId = t.turfId " +
           "WHERE t.ownerId = :ownerId AND b.bookingDate = CURRENT_DATE AND b.bookingStatus = 'CONFIRMED'")
    long countTodaysConfirmedBookingsForOwner(@Param("ownerId") int ownerId);

    @Query("SELECT COUNT(b) FROM Booking b JOIN Turf t ON b.turfId = t.turfId " +
           "WHERE t.ownerId = :ownerId AND b.bookingDate > CURRENT_DATE AND b.bookingStatus = 'CONFIRMED'")
    long countUpcomingConfirmedBookingsForOwner(@Param("ownerId") int ownerId);

    @Query("SELECT COALESCE(SUM(b.totalAmount), 0) FROM Booking b JOIN Turf t ON b.turfId = t.turfId " +
           "WHERE t.ownerId = :ownerId AND b.bookingStatus = 'CONFIRMED'")
    double sumConfirmedRevenueForOwner(@Param("ownerId") int ownerId);
}
