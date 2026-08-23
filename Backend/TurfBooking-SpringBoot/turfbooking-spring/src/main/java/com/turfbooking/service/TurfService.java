package com.turfbooking.service;

import com.turfbooking.entity.Turf;
import com.turfbooking.repository.TurfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class TurfService {

    @Autowired
    private TurfRepository turfRepository;

    @org.springframework.beans.factory.annotation.Value("${app.upload.dir}")
    private String uploadDir;

    public List<Turf> getAllTurfs() {
        return turfRepository.findAll();
    }

    /** Mirrors TurfDAO.searchTurfs() - LIKE match on name OR city. */
    public List<Turf> searchTurfs(String search) {
        return turfRepository
                .findByTurfNameContainingIgnoreCaseOrCityContainingIgnoreCaseOrderByTurfIdDesc(search, search);
    }

    public List<Turf> getOwnerTurfs(int ownerId) {
        return turfRepository.findByOwnerIdOrderByTurfIdDesc(ownerId);
    }

    /**
     * Mirrors AddTurfServlet: saves the uploaded thumbnail to disk under
     * app.upload.dir, then persists the Turf row with the generated filename.
     */
    public boolean addTurf(int ownerId, String turfName, String location, String city,
                            double pricePerHour, String openingTime, String closingTime,
                            String description, MultipartFile thumbnail) throws IOException {

        File uploadFolder = new File(uploadDir);
        if (!uploadFolder.exists()) {
            uploadFolder.mkdirs();
        }

        String originalFileName = Paths.get(thumbnail.getOriginalFilename()).getFileName().toString();
        String uniqueFileName = System.currentTimeMillis() + "_" + originalFileName;

        Path target = Paths.get(uploadDir, uniqueFileName);
        Files.copy(thumbnail.getInputStream(), target);

        Turf turf = new Turf();
        turf.setOwnerId(ownerId);
        turf.setTurfName(turfName);
        turf.setLocation(location);
        turf.setCity(city);
        turf.setPricePerHour(pricePerHour);
        turf.setOpeningTime(openingTime);
        turf.setClosingTime(closingTime);
        turf.setDescription(description);
        turf.setThumbnailUrl(uniqueFileName);
        turf.setRating(0.0);
        turf.setStatus("ACTIVE");

        turfRepository.save(turf);

        return true;
    }

    /** New (the old servlet stub was empty) - simple full-record update. */
    public boolean updateTurf(Turf updatedTurf) {

        Optional<Turf> existingOpt = turfRepository.findById(updatedTurf.getTurfId());

        if (existingOpt.isEmpty()) {
            return false;
        }

        Turf existing = existingOpt.get();
        existing.setTurfName(updatedTurf.getTurfName());
        existing.setLocation(updatedTurf.getLocation());
        existing.setCity(updatedTurf.getCity());
        existing.setPricePerHour(updatedTurf.getPricePerHour());
        existing.setOpeningTime(updatedTurf.getOpeningTime());
        existing.setClosingTime(updatedTurf.getClosingTime());
        existing.setDescription(updatedTurf.getDescription());
        existing.setStatus(updatedTurf.getStatus());

        // Only overwrite the thumbnail if a new one was actually provided
        if (updatedTurf.getThumbnailUrl() != null && !updatedTurf.getThumbnailUrl().isBlank()) {
            existing.setThumbnailUrl(updatedTurf.getThumbnailUrl());
        }

        turfRepository.save(existing);

        return true;
    }

    /** New (the old servlet stub was empty). */
    public boolean deleteTurf(int turfId) {

        if (!turfRepository.existsById(turfId)) {
            return false;
        }

        turfRepository.deleteById(turfId);

        return true;
    }
}
