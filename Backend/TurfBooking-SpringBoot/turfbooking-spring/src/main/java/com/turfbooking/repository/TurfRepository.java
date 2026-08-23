package com.turfbooking.repository;

import com.turfbooking.entity.Turf;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TurfRepository extends JpaRepository<Turf, Integer> {

    List<Turf> findByOwnerIdOrderByTurfIdDesc(int ownerId);

    List<Turf> findByTurfNameContainingIgnoreCaseOrCityContainingIgnoreCaseOrderByTurfIdDesc(
            String turfName, String city);

    long countByOwnerId(int ownerId);
}
