package com.example.demo.Service;

import com.example.demo.Model.Student;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class StudentService {

    private Student student;

    public List<Student> createStudents ()
    {
        return List.of(
                new Student(
                        13,
                        LocalDate.of(2000, Month.APRIL, 5),
                        1L,
                        "malath@gmail.com",
                        "malath"


                )
        );
    }
}
