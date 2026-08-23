package com.turfbooking.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/** Replaces TestServlet ("/test") - simple health check. */
@RestController
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "Working";
    }
}
