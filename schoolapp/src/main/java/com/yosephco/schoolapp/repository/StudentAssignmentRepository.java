package com.yosephco.schoolapp.repository;

import com.yosephco.schoolapp.model.StudentAssignment;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentAssignmentRepository extends JpaRepository<StudentAssignment, Integer> {
    List<StudentAssignment> findByStudentId(int id);

    List<StudentAssignment> findByStatus(String id);

    List<StudentAssignment> findAllByStudentId(int studentId);

    Optional<StudentAssignment> findByAssignmentIdAndStudentId(int assignmentId,
            int studentId);

}
