package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity

public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userID;

    private String firstName;
    private String lastName;
    private String department;
    private String country;
    private String email;
}