package com.yosephco.schoolapp.repository;

import com.yosephco.schoolapp.model.TeacherClass;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherClassRepository extends JpaRepository<TeacherClass, Integer> {
    List<TeacherClass> findAllTeacherClassByTeacherId(int teacherId);
}
