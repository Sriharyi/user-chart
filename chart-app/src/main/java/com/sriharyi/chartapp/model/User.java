package com.sriharyi.chartapp.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "users")
public class User {
    
        @Id()
        private String id;

        @Field("user_id")
        private Integer userId;
    
        @Field("first_name")
        private String firstName;

        @Field("last_name")
        private String lastName;
        
        @Field("email")
        private String email;

        @Field("age")
        private Integer age;

        @Field("registration_date")
        private LocalDateTime registrationDate;

        @Field("country")
        private String country;

        @Field("state")
        private String state;

        @Field("latitude")
        private Double latitude;

        @Field("longitude")
        private Double longitude; 

}
