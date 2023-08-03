package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import com.yosephco.schoolapp.model.StudentClass;

public interface StudentClassServiceInterface {
    public StudentClass saveStudentClass(StudentClass studentClass);

    public Optional<StudentClass> getStudentClassById(int id);

    List<StudentClass> getAllStudentClass();

    List<StudentClass> getClassByStudentID(int studentId);

    List<StudentClass> getClassBySectionId(int sectionId);

    StudentClass updateStudentClass(int id, StudentClass studentClass);

    void deleteStudentClass(int id);

    //

}
