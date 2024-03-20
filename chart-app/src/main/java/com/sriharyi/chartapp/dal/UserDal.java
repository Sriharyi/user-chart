package com.sriharyi.chartapp.dal;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.DateOperators;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.ProjectionOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import com.sriharyi.chartapp.model.GeoLocation;
import com.sriharyi.chartapp.model.User;
import com.sriharyi.chartapp.model.UserRegistrationCount;
import com.sriharyi.chartapp.model.UserRegistrationCountByState;
import com.sriharyi.chartapp.model.UserRegistrationCountDay;

@Repository
public class UserDal {

        @Autowired
        private MongoTemplate mongoTemplate;

        public List<User> getUser() {
                return mongoTemplate.findAll(User.class);
        }

        @SuppressWarnings("null")
        public List<UserRegistrationCount> getUserRegistrationsByMonth(Integer year) {
                Criteria criteria = Criteria.where("registration_date").gte(LocalDate.of(year, 1, 1))
                                .lt(LocalDate.of(year + 1, 1, 1));

                Aggregation aggregation = Aggregation.newAggregation(
                                Aggregation.match(criteria),
                                Aggregation.project()
                                                .and(DateOperators.dateOf("registration_date").year()).as("year")
                                                .and(DateOperators.dateOf("registration_date").month()).as("month"),
                                Aggregation.group("year", "month").count().as("count"),
                                Aggregation.project()
                                                .and("_id.year").as("year")
                                                .and("_id.month").as("month")
                                                .and("count").as("count"),
                                Aggregation.sort(Sort.by(Sort.Order.asc("year"), Sort.Order.asc("month"))));

                AggregationResults<UserRegistrationCount> results = mongoTemplate.aggregate(aggregation, User.class,
                                UserRegistrationCount.class);
                return results.getMappedResults();

        }

        public List<UserRegistrationCountDay> getUserRegistrationsByDay(Integer year, Integer month) {
                @SuppressWarnings("null")
                YearMonth yearMonth = YearMonth.of(year, month);
                LocalDate startDate = yearMonth.atDay(1);
                LocalDate endDate = yearMonth.plusMonths(1).atDay(1);

                Criteria criteria = Criteria.where("registration_date").gte(startDate).lt(endDate);

                // project year, month, day and count
                ProjectionOperation ProjectionsOperation = Aggregation.project()
                                .and(DateOperators.dateOf("registration_date").year()).as("year")
                                .and(DateOperators.dateOf("registration_date").month()).as("month")
                                .and(DateOperators.dateOf("registration_date").dayOfMonth()).as("day");

                // group by year, month
                GroupOperation groupOperation = Aggregation.group("year", "month", "day").count().as("count");

                Aggregation aggregation = Aggregation.newAggregation(
                                Aggregation.match(criteria),
                                ProjectionsOperation,
                                groupOperation,
                                Aggregation.project()
                                                .and("_id.year").as("year")
                                                .and("_id.month").as("month")
                                                .and("_id.day").as("day")
                                                .and("count").as("count"),
                                Aggregation.sort(Sort.by(Sort.Order.asc("year"), Sort.Order.asc("month"),
                                                Sort.Order.asc("day"))));

                AggregationResults<UserRegistrationCountDay> results = mongoTemplate.aggregate(aggregation, User.class,
                                UserRegistrationCountDay.class);
                System.out.println(results.getRawResults());
                return results.getMappedResults();

        }

        public List<UserRegistrationCountByState> getUserRegistrationsByState() {
                Criteria criteria = Criteria.where("country").is("India");

                GroupOperation groupOperation = Aggregation.group("state").count().as("count");
                ProjectionOperation projectionOperation = Aggregation.project("count").and("_id").as("state");
                Aggregation aggregation = Aggregation.newAggregation( 
                        Aggregation.match(criteria),        
                groupOperation, projectionOperation);
                AggregationResults<UserRegistrationCountByState> results = mongoTemplate.aggregate(aggregation,
                                User.class,
                                UserRegistrationCountByState.class);
                                System.out.println(results.getRawResults());
                return results.getMappedResults();
        }

        public List<GeoLocation> getUserRegistrationsByGeo() {
                List<User> users = mongoTemplate.findAll(User.class);

                List<GeoLocation> geoLocations = new ArrayList<>();
                users.forEach(user -> {
                        GeoLocation geoLocation = new GeoLocation();
                        // geoLocation.setState(user.getState());
                        geoLocation.setLatitude(user.getLatitude());
                        geoLocation.setLongitude(user.getLongitude());
                        geoLocations.add(geoLocation);
                });
                return geoLocations;
        }

}
