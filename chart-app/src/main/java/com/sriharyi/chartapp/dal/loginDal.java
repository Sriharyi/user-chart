package com.sriharyi.chartapp.dal;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.sriharyi.chartapp.model.Login;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class loginDal {
    
    private final MongoTemplate mongoTemplate;

    public List<Login> getLoginsByDate(LocalDateTime date){
      LocalDateTime start = date.withHour(0).withMinute(0).withSecond(0);
      LocalDateTime end = date.withHour(23).withMinute(59).withSecond(59);
      Criteria criteria = Criteria.where("login_time").gte(start).lte(end);
      Query query = new Query(criteria);
      return mongoTemplate.find(query, Login.class);
    }
}
