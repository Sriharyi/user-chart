package com.sriharyi.chartapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sriharyi.chartapp.dal.UserDal;
import com.sriharyi.chartapp.model.GeoLocation;
import com.sriharyi.chartapp.model.User;
import com.sriharyi.chartapp.model.UserRegistrationCount;
import com.sriharyi.chartapp.model.UserRegistrationCountByState;
import com.sriharyi.chartapp.model.UserRegistrationCountDay;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserDal userDal;

    public List<User> getUser() {
        return userDal.getUser();
    }

    public List<UserRegistrationCount> getUserRegistrationsByMonth(Integer year) {
        return userDal.getUserRegistrationsByMonth(year);
    }

    public List<UserRegistrationCountDay> getUserRegistrationsByDay(Integer year, Integer month) {
       
       return userDal.getUserRegistrationsByDay(year, month);

    }

    public List<UserRegistrationCountByState> getUserRegistrationsByState() {
        return userDal.getUserRegistrationsByState();
    }

    public List<GeoLocation> getUserRegistrationsByGeo() {
        return userDal.getUserRegistrationsByGeo();
    }
}
