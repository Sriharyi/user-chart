package com.sriharyi.chartapp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sriharyi.chartapp.model.GeoLocation;
import com.sriharyi.chartapp.model.User;
import com.sriharyi.chartapp.model.UserRegistrationCount;
import com.sriharyi.chartapp.model.UserRegistrationCountByState;
import com.sriharyi.chartapp.model.UserRegistrationCountDay;
import com.sriharyi.chartapp.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
@CrossOrigin(origins = "http://localhost:4201")
public class UserController {
    private final UserService userService;

    @GetMapping()
    private ResponseEntity<List<User>> getUser() {
        List<User> users = userService.getUser();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/registrations")
    private ResponseEntity<List<UserRegistrationCount>> getUserRegistrationsByMonth(@RequestParam Integer year) {
        List<UserRegistrationCount> userRegistrations = userService.getUserRegistrationsByMonth(year);
        return ResponseEntity.ok(userRegistrations);
    }

    @GetMapping("/registrations/month")
    private ResponseEntity<List<UserRegistrationCountDay>> getUserRegistrationsByDay(@RequestParam Integer year,
            @RequestParam Integer month) {
        List<UserRegistrationCountDay> userRegistrations = userService.getUserRegistrationsByDay(year,month);
        return ResponseEntity.ok(userRegistrations);
    }

    @GetMapping("/registrations/state")
    private ResponseEntity<List<UserRegistrationCountByState>> getUserRegistrationByState(){
        List<UserRegistrationCountByState> userRegistrations = userService.getUserRegistrationsByState();
        return ResponseEntity.ok(userRegistrations);
    }

    @GetMapping("/registrations/geo")
    private ResponseEntity<List<GeoLocation>> getUserRegistrationByGeo(){
        List<GeoLocation> userRegistrations = userService.getUserRegistrationsByGeo();
        return ResponseEntity.ok(userRegistrations);
    }


}
