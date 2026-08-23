package com.turfbooking.controller;

import com.turfbooking.dto.BookingRequest;
import com.turfbooking.dto.BookingResponse;
import com.turfbooking.dto.MessageResponse;
import com.turfbooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

/**
 * Replaces BookSlotServlet, GetBookedSlotsServlet, GetMyBookingsServlet,
 * CancelBookingServlet.
 */
@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/getBookedSlots")
    public List<String> getBookedSlots(@RequestParam int turfId,
                                        @RequestParam String bookingDate) {

        return bookingService.getBookedSlots(turfId, Date.valueOf(bookingDate));
    }

    @PostMapping(value = "/bookSlot", consumes = "application/json")
    public MessageResponse bookSlot(@RequestBody BookingRequest bookingRequest) {

        String error = bookingService.bookSlots(bookingRequest);

        if (error != null) {
            return new MessageResponse(false, error);
        }

        return new MessageResponse(true, "Booking Successful");
    }

    @GetMapping("/getMyBookings")
    public List<BookingResponse> getMyBookings(@RequestParam int userId) {
        return bookingService.getBookingsByUserId(userId);
    }

    @PostMapping(value = "/cancelBooking", consumes = "application/x-www-form-urlencoded")
    public MessageResponse cancelBooking(@RequestParam int bookingId) {

        boolean status = bookingService.cancelBooking(bookingId);

        if (status) {
            return new MessageResponse(true, "Booking Cancelled Successfully");
        }

        return new MessageResponse(false, "Cancellation Failed");
    }
}
