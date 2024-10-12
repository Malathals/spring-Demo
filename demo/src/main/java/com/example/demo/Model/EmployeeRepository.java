package com.example.demo.Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//The first one is an entity, the second is the type of PK
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
