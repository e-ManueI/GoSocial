package com.gosocial.gosocialbackend.controller;

import com.gosocial.gosocialbackend.config.JwtConfig;
import com.gosocial.gosocialbackend.model.User;
import com.gosocial.gosocialbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtConfig jwtConfig;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Check if the user already exists
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists.");
        }

        // Perform validation and save the user to the database
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully.");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser == null) {
            throw new RuntimeException("Invalid username or password.");
        }

        // Perform password validation
        if (!existingUser.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Invalid username or password.");
        }

        // Generate JWT token
        String token = jwtConfig.generateToken(existingUser.getEmail());

        return ResponseEntity.ok(token);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/allusers")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
}