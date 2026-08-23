package com.turfbooking.controller;

import com.turfbooking.dto.LoginResponse;
import com.turfbooking.dto.LoginResult;
import com.turfbooking.dto.MessageResponse;
import com.turfbooking.entity.User;
import com.turfbooking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Replaces SignupServlet ("/signup") and LoginServlet ("/login").
 * Kept as application/x-www-form-urlencoded params to match the existing
 * userService.js on the frontend (URLSearchParams + axios).
 */
@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/signup", consumes = "application/x-www-form-urlencoded")
    public MessageResponse signup(@RequestParam String fullName,
                                   @RequestParam String email,
                                   @RequestParam String phone,
                                   @RequestParam String password) {

        User user = new User();
        user.setFullName(fullName);
        user.setEmail(email);
        user.setPhone(phone);
        user.setPassword(password);
        user.setRole("USER");
        user.setProfileImage(null);
        user.setAccountStatus("ACTIVE");

        String result = userService.registerUser(user);

        if ("SUCCESS".equals(result)) {
            return new MessageResponse(true, "Registration Successful");
        }

        return new MessageResponse(false, result);
    }

    @PostMapping(value = "/login", consumes = "application/x-www-form-urlencoded")
    public LoginResponse login(@RequestParam String email,
                                @RequestParam String password) {

        LoginResult result = userService.loginUser(email, password);

        return new LoginResponse(result.isSuccess(), result.getMessage(), result.getUser());
    }
}
