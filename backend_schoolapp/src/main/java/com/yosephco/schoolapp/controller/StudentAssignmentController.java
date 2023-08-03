package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.StudentAssignment;
import com.yosephco.schoolapp.service.StudentAssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/student_assignment")
public class StudentAssignmentController {

    @Autowired
    private StudentAssignmentService studentAssignmentService; // we are bringing in Student Service instance

    /** This is a post Request, here we are gonna ba saving an Student */
    @PostMapping
    public StudentAssignment saveStudentAssignment(@RequestBody StudentAssignment studentAssignment) {
        return studentAssignmentService.saveStudentAssignment(studentAssignment);
    }

    /** Here, we are getting all Student */
    @GetMapping
    public List<StudentAssignment> getAllStudentAssignment() {
        return studentAssignmentService.getAllStudentAssignment();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<StudentAssignment> getStudentAssignmentById(@PathVariable int id) {
        return studentAssignmentService.getStudentAssignmentById(id);
    }

    @GetMapping("/student-assignment/{assignmentId}/{studentId}")
    public Optional<StudentAssignment> getStudentAssignmentByAssignmentIdAndStudentId(@PathVariable int assignmentId, @PathVariable int studentId) {
        return studentAssignmentService.getStudentAssignmentByAssignmentIdAndStudentId(assignmentId, studentId);
    }

    @GetMapping("/student/{id}")
    public List<StudentAssignment> getStudentAssignmentByStudentId(@PathVariable int id) {
        return studentAssignmentService.findStudentAssignmentByStudentId(id);
    }

    @GetMapping("/status/{id}")
    public List<StudentAssignment> getStudentAssignmentByStatus(@PathVariable String id) {
        return studentAssignmentService.findStudentAssignmentByStatus(id);
    }

    /** here, we get gonna be updating an Student */
    @PutMapping("/{id}")
    public StudentAssignment updateStudentAssignment(@PathVariable int id,
            @RequestBody StudentAssignment studentAssignment) {
        return studentAssignmentService.updateStudentAssignment(id, studentAssignment);
    }

    /** Here, we are gonna be deleting a Student */
    @DeleteMapping("/{id}")
    public void deleteStudentAssignment(@PathVariable int id) {
        studentAssignmentService.deleteStudentAssignment(id);
    }
}
