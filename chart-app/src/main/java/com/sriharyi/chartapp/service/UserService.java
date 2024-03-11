package com.sriharyi.chartapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sriharyi.chartapp.dal.UserDal;
import com.sriharyi.chartapp.model.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserDal userDal;

    public List<User> getUser() {
        return userDal.getUser();
    }
}
