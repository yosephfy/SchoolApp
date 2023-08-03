package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.Student;
import com.yosephco.schoolapp.model.StudentClass;
import com.yosephco.schoolapp.service.StudentClassService;
import com.yosephco.schoolapp.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/student_class")
public class StudentClassController {

    @Autowired
    private StudentClassService studentClassService; // we are bringing in Student Service instance
    @Autowired
    private StudentService studentService;

    /** This is a post Request, here we are gonna ba saving an Student */
    @PostMapping
    public StudentClass saveStudentClass(@RequestBody StudentClass studentClass) {
        return studentClassService.saveStudentClass(studentClass);
    }

    /** Here, we are getting all Student */
    @GetMapping
    public List<StudentClass> getAllStudentClass() {
        return studentClassService.getAllStudentClass();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<StudentClass> getStudentClassById(@PathVariable int id) {
        return studentClassService.getStudentClassById(id);
    }

    @GetMapping("/schedule/{studentId}")
    public List<StudentClass> getStudentClassByStudentId(@PathVariable int studentId) {
        return studentClassService.getClassByStudentID(studentId);
    }

    @GetMapping("/section/{sectionId}")
    public List<StudentClass> getStudentClassBySectionId(@PathVariable int sectionId) {
        return studentClassService.getClassBySectionId(sectionId);
    }

    /** here, we get gonna be updating an Student */
    @PutMapping("/{id}")
    public StudentClass updateStudentClass(@PathVariable int id, @RequestBody StudentClass studentClass) {
        return studentClassService.updateStudentClass(id, studentClass);
    }

    /** Here, we are gonna be deleting a Student */
    @DeleteMapping("/{id}")
    public void deleteStudentClass(@PathVariable int id) {
        studentClassService.deleteStudentClass(id);
    }

    //

    @GetMapping("/student-by-section/{sectionId}")
    public List<Student> getAllStudentsInSection(@PathVariable int sectionId) {
        List<StudentClass> classes = studentClassService.getClassBySectionId(sectionId);
        List<Student> result = new ArrayList<>();
        for (StudentClass elem : classes) {
            result.add(studentService.getStudentById(elem.getStudentId()).orElse(null));
        }

        return result;
    }
}
