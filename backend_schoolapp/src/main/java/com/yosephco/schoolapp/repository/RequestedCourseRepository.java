package com.yosephco.schoolapp.repository;

import com.yosephco.schoolapp.model.RequestedCourse;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestedCourseRepository extends JpaRepository<RequestedCourse, Integer> {
    List<RequestedCourse> findByStudentId(int id);

    List<RequestedCourse> findBySectionId(int id);

    List<RequestedCourse> findBySemester(String id);

}
