package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.Assignment;
import com.yosephco.schoolapp.repository.AssignmentRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class AssignmentService implements AssignmentServiceInterface {

    @Autowired
    private AssignmentRepository assignmentRepoisitory;

    @Override
    public Assignment saveAssignment(Assignment assignment) {
        Optional<Assignment> stu = assignmentRepoisitory.findById(assignment.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Assignment already exists");
        } else
            return assignmentRepoisitory.save(assignment);
    }

    @Override
    public Optional<Assignment> getAssignmentById(int id) {
        return assignmentRepoisitory.findById(id);
    }

    @Override
    public List<Assignment> getAllAssignment() {
        return assignmentRepoisitory.findAll(Sort.by(Sort.Direction.ASC, "dueDate"));
    }

    @Override
    public Assignment updateAssignment(int id, Assignment assignment) {
        Assignment assignmentToUpdate = assignmentRepoisitory.findById(id).orElseThrow(null);
        assignmentToUpdate.setAssignment(assignment);
        return assignmentRepoisitory.save(assignment);
    }

    public List<Assignment> getAllAssignmentsBySectionId(int sectionNum) {
        return assignmentRepoisitory.findBySectionIdOrderByDueDateAsc(sectionNum);
    }

    @Override
    public void deleteAssignment(int id) {
        assignmentRepoisitory.deleteById(id);
    }

}
