package com.sriharyi.chartapp.controller;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sriharyi.chartapp.model.Login;
import com.sriharyi.chartapp.service.LoginService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/logins")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    private final LoginService loginService;


    @GetMapping("/logs")
    private ResponseEntity<Map<Integer,Long>> getLoginsByDate(@RequestParam LocalDateTime date) {
        Map<Integer,Long> logins = loginService.getLoginsCountByDate(date);
        return ResponseEntity.ok(logins);
    }
    
}
