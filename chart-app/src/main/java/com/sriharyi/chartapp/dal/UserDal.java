package com.sriharyi.chartapp.dal;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.sriharyi.chartapp.model.User;

@Repository
public class UserDal {

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<User> getUser() {
        return mongoTemplate.findAll(User.class);
    }

}
