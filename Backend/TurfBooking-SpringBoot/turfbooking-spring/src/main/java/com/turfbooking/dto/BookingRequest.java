package com.turfbooking.dto;

import java.util.List;

public class BookingRequest {

    private int userId;
    private int turfId;
    private String bookingDate;
    private double totalAmount;
    private List<SlotDTO> slots;

    public BookingRequest() {
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

    public String getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public List<SlotDTO> getSlots() {
        return slots;
    }

    public void setSlots(List<SlotDTO> slots) {
        this.slots = slots;
    }
}
