package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.StudentAssignment;
import com.yosephco.schoolapp.repository.StudentAssignmentRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class StudentAssignmentService implements StudentAssignmentServiceInterface {

    @Autowired
    private StudentAssignmentRepository studentAssignmentRepository;

    @Override
    public void deleteStudentAssignment(int id) {
        studentAssignmentRepository.deleteById(id);
    }

    @Override
    public StudentAssignment saveStudentAssignment(StudentAssignment studentAssignment) {
        Optional<StudentAssignment> stu = studentAssignmentRepository.findById(studentAssignment.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Student already exists");
        } else
            return studentAssignmentRepository.save(studentAssignment);
    }

    @Override
    public Optional<StudentAssignment> getStudentAssignmentById(int id) {
        return studentAssignmentRepository.findById(id);
    }

    @Override
    public Optional<StudentAssignment> getStudentAssignmentByAssignmentIdAndStudentId(int assignmentId, int studentId) {
        return studentAssignmentRepository.findByAssignmentIdAndStudentId(assignmentId, studentId);
    }

    @Override
    public List<StudentAssignment> getAllStudentAssignment() {
        return studentAssignmentRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public StudentAssignment updateStudentAssignment(int id, StudentAssignment studentAssignment) {
        StudentAssignment studentAssignmentToUpdate = studentAssignmentRepository.findById(id).orElseThrow(null);
        studentAssignmentToUpdate.setStudentAssignment(studentAssignment);
        return studentAssignmentRepository.save(studentAssignment);
    }

    @Override
    public List<StudentAssignment> findStudentAssignmentByStudentId(int id) {
        return studentAssignmentRepository.findByStudentId(id);
    }

    @Override
    public List<StudentAssignment> findStudentAssignmentByStatus(String id) {
        return studentAssignmentRepository.findByStatus(id);
    }

}
