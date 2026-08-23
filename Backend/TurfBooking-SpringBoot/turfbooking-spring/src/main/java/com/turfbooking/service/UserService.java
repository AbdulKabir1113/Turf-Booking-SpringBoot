package com.turfbooking.service;

import com.turfbooking.dto.LoginResult;
import com.turfbooking.entity.User;
import com.turfbooking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Mirrors UserDAO.registerUser(): checks for duplicate email/phone
     * before inserting, and returns a message string like the original.
     */
    public String registerUser(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            return "Email already registered";
        }

        if (userRepository.existsByPhone(user.getPhone())) {
            return "Phone number already registered";
        }

        userRepository.save(user);

        return "SUCCESS";
    }

    /**
     * Mirrors UserDAO.loginUser(): email lookup, plain password check
     * (kept identical to the original behaviour), account-status check.
     */
    public LoginResult loginUser(String email, String password) {

        LoginResult result = new LoginResult();

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            result.setSuccess(false);
            result.setMessage("Email is not registered");
            return result;
        }

        if (!user.getPassword().equals(password)) {
            result.setSuccess(false);
            result.setMessage("Incorrect password");
            return result;
        }

        if (!"ACTIVE".equalsIgnoreCase(user.getAccountStatus())) {
            result.setSuccess(false);
            result.setMessage("Your account is inactive");
            return result;
        }

        result.setSuccess(true);
        result.setMessage("Login Successful");
        result.setUser(user);

        return result;
    }
}
