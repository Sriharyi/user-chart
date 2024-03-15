package com.sriharyi.chartapp.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "logins")
public class Login {

    @Id
    private String id;

    private String user_id;

    private LocalDateTime login_time;

    private String country;

    private String state;

    private String ip_address;
}
