package com.sriharyi.chartapp.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRegistrationCountDay {
    private Long year;
    private Long month;
    private Long day;
    private Long count;
}
