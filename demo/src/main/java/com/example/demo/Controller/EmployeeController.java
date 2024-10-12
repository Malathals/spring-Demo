package com.example.demo.Controller;

import com.example.demo.Model.Employee;
import com.example.demo.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin

public class EmployeeController {

    @Autowired
    private EmployeeService EmployeeService;

    @GetMapping("/getEmployees")
    public List<Employee> getEmployee()
    {
        return EmployeeService.getEmployee();
    }

    @PostMapping("/insertEmployee")
    public void insertEmployee( @RequestBody Employee employee){
        EmployeeService.insertEmployee(employee);
    }

    @PutMapping("/updateEmployee/{employeeID} ")
    public void updateEmployee(@PathVariable("employeeID") Integer userID, @RequestBody Employee employee){
        EmployeeService.updateEmployee(employee);
    }

    @DeleteMapping("/deleteEmployee/{employeeID}")
    public void deleteEmployee(@PathVariable("employeeId") Integer employeeID){
        EmployeeService.deleteEmployee(employeeID);
    }

}
