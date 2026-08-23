package com.turfbooking.dto;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

/**
 * Flattened "view" of a booking, used everywhere the old JDBC code
 * did a JOIN across bookings/turfs/users (My Bookings, Owner Bookings,
 * Owner Dashboard recent bookings). This is NOT a JPA entity - it's a
 * projection built by the service layer from query results.
 */
public class BookingResponse {

    private int bookingId;
    private int userId;
    private int turfId;
    private Date bookingDate;
    private Time slotStart;
    private Time slotEnd;
    private double totalAmount;
    private String bookingStatus;
    private Timestamp createdAt;

    // Owner Dashboard / Owner Bookings
    private String customerName;
    private String customerPhone;

    // Turf Details (For My Bookings)
    private String turfName;
    private String turfLocation;
    private String city;
    private String thumbnailUrl;

    public BookingResponse() {
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getTurfId() {
        return turfId;
    }

    public void setTurfId(int turfId) {
        this.turfId = turfId;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Time getSlotStart() {
        return slotStart;
    }

    public void setSlotStart(Time slotStart) {
        this.slotStart = slotStart;
    }

    public Time getSlotEnd() {
        return slotEnd;
    }

    public void setSlotEnd(Time slotEnd) {
        this.slotEnd = slotEnd;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getTurfName() {
        return turfName;
    }

    public void setTurfName(String turfName) {
        this.turfName = turfName;
    }

    public String getTurfLocation() {
        return turfLocation;
    }

    public void setTurfLocation(String turfLocation) {
        this.turfLocation = turfLocation;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }
}
