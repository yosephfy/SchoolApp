package com.yosephco.schoolapp.repository;

import com.yosephco.schoolapp.model.Assignment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {
    List<Assignment> findBySectionIdOrderByDueDateAsc(int section);

}
