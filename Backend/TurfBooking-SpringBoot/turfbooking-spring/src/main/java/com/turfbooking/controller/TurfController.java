package com.turfbooking.controller;

import com.turfbooking.dto.MessageResponse;
import com.turfbooking.entity.Turf;
import com.turfbooking.service.TurfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * Replaces GetAllTurfsServlet ("/getAllTurfs") and AddTurfServlet ("/addTurf").
 */
@RestController
public class TurfController {

    @Autowired
    private TurfService turfService;

    @GetMapping("/getAllTurfs")
    public List<Turf> getAllTurfs(@RequestParam(required = false) String search) {

        if (search == null || search.trim().isEmpty()) {
            return turfService.getAllTurfs();
        }

        return turfService.searchTurfs(search);
    }

    @PostMapping(value = "/addTurf", consumes = "multipart/form-data")
    public MessageResponse addTurf(@RequestParam int ownerId,
                                    @RequestParam String turfName,
                                    @RequestParam String location,
                                    @RequestParam String city,
                                    @RequestParam double pricePerHour,
                                    @RequestParam String openingTime,
                                    @RequestParam String closingTime,
                                    @RequestParam String description,
                                    @RequestParam("thumbnail") MultipartFile thumbnail) {

        try {
            boolean status = turfService.addTurf(ownerId, turfName, location, city,
                    pricePerHour, openingTime, closingTime, description, thumbnail);

            if (status) {
                return new MessageResponse(true, "Turf Added Successfully");
            }

            return new MessageResponse(false, "Failed To Add Turf");

        } catch (IOException e) {
            e.printStackTrace();
            return new MessageResponse(false, "Server Error");
        }
    }

    /** New endpoint - the old UpdateTurfServlet was an empty stub. */
    @PutMapping("/updateTurf")
    public MessageResponse updateTurf(@RequestBody Turf turf) {

        boolean status = turfService.updateTurf(turf);

        if (status) {
            return new MessageResponse(true, "Turf Updated Successfully");
        }

        return new MessageResponse(false, "Turf Not Found");
    }

    /** New endpoint - the old DeleteTurfServlet was an empty stub. */
    @DeleteMapping("/deleteTurf")
    public MessageResponse deleteTurf(@RequestParam int turfId) {

        boolean status = turfService.deleteTurf(turfId);

        if (status) {
            return new MessageResponse(true, "Turf Deleted Successfully");
        }

        return new MessageResponse(false, "Turf Not Found");
    }
}
