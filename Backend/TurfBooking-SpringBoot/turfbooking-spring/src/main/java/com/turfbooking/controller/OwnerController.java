package com.turfbooking.controller;

import com.turfbooking.dto.BookingResponse;
import com.turfbooking.dto.OwnerDashboardResponse;
import com.turfbooking.entity.Turf;
import com.turfbooking.entity.User;
import com.turfbooking.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Replaces OwnerDashboardServlet, GetOwnerTurfsServlet,
 * GetOwnerBookingsServlet, GetOwnerProfileServlet.
 */
@RestController
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @GetMapping("/ownerDashboard")
    public OwnerDashboardResponse getDashboard(@RequestParam int ownerId) {
        return ownerService.getDashboardData(ownerId);
    }

    @GetMapping("/getOwnerTurfs")
    public List<Turf> getOwnerTurfs(@RequestParam int ownerId) {
        return ownerService.getOwnerTurfs(ownerId);
    }

    @GetMapping("/getOwnerBookings")
    public List<BookingResponse> getOwnerBookings(@RequestParam int ownerId) {
        return ownerService.getOwnerBookings(ownerId);
    }

    @GetMapping("/getOwnerProfile")
    public User getOwnerProfile(@RequestParam int ownerId) {
        return ownerService.getOwnerProfile(ownerId);
    }
}
