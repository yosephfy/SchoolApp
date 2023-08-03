package com.yosephco.schoolapp.repository;

import com.yosephco.schoolapp.model.StudentClass;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentClassRepository extends JpaRepository<StudentClass, Integer> {
    List<StudentClass> findAllStudentClassByStudentId(int studentId);

    List<StudentClass> findAllStudentClassBySectionId(int sectionId);
}
