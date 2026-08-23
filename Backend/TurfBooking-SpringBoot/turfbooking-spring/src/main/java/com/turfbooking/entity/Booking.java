package com.turfbooking.entity;

import jakarta.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private int bookingId;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "turf_id")
    private int turfId;

    @Column(name = "booking_date")
    private Date bookingDate;

    @Column(name = "slot_start")
    private Time slotStart;

    @Column(name = "slot_end")
    private Time slotEnd;

    @Column(name = "total_amount")
    private double totalAmount;

    @Column(name = "booking_status")
    private String bookingStatus;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Timestamp createdAt;

    public Booking() {
    }

    public Booking(int userId, int turfId, Date bookingDate,
                    Time slotStart, Time slotEnd,
                    double totalAmount, String bookingStatus) {
        this.userId = userId;
        this.turfId = turfId;
        this.bookingDate = bookingDate;
        this.slotStart = slotStart;
        this.slotEnd = slotEnd;
        this.totalAmount = totalAmount;
        this.bookingStatus = bookingStatus;
    }

    // Getters and Setters

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
}
