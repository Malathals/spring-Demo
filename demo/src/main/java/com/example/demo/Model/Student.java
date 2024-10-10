package com.example.demo.Model;

import java.time.LocalDate;
import java.util.UUID;

public class Student {
    private String name;
    private String email;
    private long id;
    private LocalDate localDate;
    private Integer age;

    public Student(Integer age,
                   LocalDate localDate,
                   long id,
                   String email,
                   String name) {
        this.age = age;
        this.localDate = localDate;
        this.id = id;
        this.email = email;
        this.name = name;
    }

    public Student(Integer age,
                   LocalDate localDate,
                   String email,
                   String name) {
        this.age = age;
        this.localDate = localDate;
        this.email = email;
        this.name = name;
    }


    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "student{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", id=" + id +
                ", localDate=" + localDate +
                ", age=" + age +
                '}';
    }

    public LocalDate getLocalDate() {
        return localDate;
    }

    public void setLocalDate(LocalDate localDate) {
        this.localDate = localDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}