package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.Assignment;
import com.yosephco.schoolapp.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/assignment")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService; // we are bringing in Student Service instance

    /** This is a post Request, here we are gonna ba saving an Student */
    @PostMapping
    public Assignment saveAssignment(@RequestBody Assignment assignment) {
        return assignmentService.saveAssignment(assignment);
    }

    /** Here, we are getting all Student */
    @GetMapping
    public List<Assignment> getAllAssignment() {
        return assignmentService.getAllAssignment();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<Assignment> getAssignmentById(@PathVariable int id) {
        return assignmentService.getAssignmentById(id);
    }

    @GetMapping("/section/{id}")
    public List<Assignment> getAssignmentBySectionId(@PathVariable int id) {
        return assignmentService.getAllAssignmentsBySectionId(id);
    }

    

    /** here, we get gonna be updating an Student */
    @PutMapping("/{id}")
    public Assignment updateAssignment(@PathVariable int id, @RequestBody Assignment assignment) {
        return assignmentService.updateAssignment(id, assignment);
    }

    /** Here, we are gonna be deleting a Student */
    @DeleteMapping("/{id}")
    public void deleteAssignment(@PathVariable int id) {
        assignmentService.deleteAssignment(id);
    }
}
