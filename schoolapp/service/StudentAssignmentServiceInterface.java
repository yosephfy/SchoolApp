package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.StudentAssignment;

import java.util.List;
import java.util.Optional;

public interface StudentAssignmentServiceInterface {
    public StudentAssignment saveStudentAssignment(StudentAssignment studentAssignment);

    public Optional<StudentAssignment> getStudentAssignmentById(int id);

    public Optional<StudentAssignment> getStudentAssignmentByAssignmentIdAndStudentId(int assignmentId, int studentId);

    List<StudentAssignment> getAllStudentAssignment();

    StudentAssignment updateStudentAssignment(int id, StudentAssignment studentAssignment);

    void deleteStudentAssignment(int id);

    public List<StudentAssignment> findStudentAssignmentByStudentId(int id);

    public List<StudentAssignment> findStudentAssignmentByStatus(String id);

}
