package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.Assignment;

import java.util.List;
import java.util.Optional;

public interface AssignmentServiceInterface {
    public Assignment saveAssignment(Assignment assignment);

    public Optional<Assignment> getAssignmentById(int id);

    List<Assignment> getAllAssignment();

    Assignment updateAssignment(int id, Assignment assignment);

    List<Assignment> getAllAssignmentsBySectionId(int sectionNum);

    void deleteAssignment(int id);
}
