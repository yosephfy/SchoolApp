package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.Student;
import com.yosephco.schoolapp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/student")
public class StudentController {

    @Autowired
    private StudentService studentService; // we are bringing in Student Service instance

    /** This is a post Request, here we are gonna ba saving an Student */
    @PostMapping
    public Student saveStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    /** Here, we are getting all Student */
    @GetMapping
    public List<Student> getAllStudent() {
        return studentService.getAllStudent();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<Student> getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    /** here, we get gonna be updating an Student */
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student Student) {
        return studentService.updateStudent(id, Student);
    }

    /** Here, we are gonna be deleting a Student */
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
    }
}
