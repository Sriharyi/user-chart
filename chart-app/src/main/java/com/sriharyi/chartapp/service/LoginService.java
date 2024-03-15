package com.sriharyi.chartapp.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sriharyi.chartapp.dal.loginDal;
import com.sriharyi.chartapp.model.Login;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final loginDal loginDal;

    public List<Login> getLoginsByDate(LocalDateTime date) {
        List<Login> logins = loginDal.getLoginsByDate(date);
        logins.sort((l1, l2) -> l1.getLogin_time().compareTo(l2.getLogin_time()));
        return logins;
    }

    public Map<Integer, Long> getLoginsCountByDate(LocalDateTime date) {
    List<Login> logins = loginDal.getLoginsByDate(date);
    Map<Integer, Long> loginsByHour = logins.stream()
        .collect(Collectors.groupingBy(
            login -> login.getLogin_time().getHour(),
            Collectors.counting()
        ));
    return loginsByHour;
}
}
