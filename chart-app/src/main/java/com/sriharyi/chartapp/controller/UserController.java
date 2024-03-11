package com.sriharyi.chartapp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sriharyi.chartapp.model.User;
import com.sriharyi.chartapp.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
public class UserController {
    private final UserService userService;

    @GetMapping()
    private ResponseEntity<List<User>> getUser() {
        List<User> users = userService.getUser();
        return ResponseEntity.ok(users);
    }
}
