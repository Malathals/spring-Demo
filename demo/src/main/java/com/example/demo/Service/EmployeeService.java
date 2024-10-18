package com.example.demo.Service;

import com.example.demo.Model.Employee;
import com.example.demo.Model.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {


    @Autowired
    private EmployeeRepository Repository;

    public List<Employee> getEmployee()
    {
       return Repository.findAll();
    };

    public void insertEmployee(Employee employee)
    {
        Repository.save(employee);
        System.out.print("insert done");
    }

    public void updateEmployee(Employee employee)
    {
        Repository.save(employee);
    }

    public void deleteEmployee(Integer employeeID)
    {
        Repository.deleteById(employeeID);
    }
}
