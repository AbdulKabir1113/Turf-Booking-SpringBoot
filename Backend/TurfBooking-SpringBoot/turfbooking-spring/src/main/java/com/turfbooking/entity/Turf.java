package com.turfbooking.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "turfs")
public class Turf {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "turf_id")
    private int turfId;

    @Column(name = "owner_id")
    private int ownerId;

    @Column(name = "turf_name")
    private String turfName;

    @Column(name = "location")
    private String location;

    @Column(name = "city")
    private String city;

    @Column(name = "price_per_hour")
    private double pricePerHour;

    @Column(name = "opening_time")
    private String openingTime;

    @Column(name = "closing_time")
    private String closingTime;

    @Column(name = "description")
    private String description;

    @Column(name = "thumbnail_url")
    private String thumbnailUrl;

    @Column(name = "rating")
    private double rating;

    @Column(name = "status")
    private String status;

    public Turf() {
    }

    // Getters and Setters

    public int getTurfId() {
        return turfId;
    }

    public void setTurfId(int turfId) {
        this.turfId = turfId;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public String getTurfName() {
        return turfName;
    }

    public void setTurfName(String turfName) {
        this.turfName = turfName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public double getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(double pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public String getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(String openingTime) {
        this.openingTime = openingTime;
    }

    public String getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(String closingTime) {
        this.closingTime = closingTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
