package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.TeacherClass;

import java.util.List;
import java.util.Optional;

public interface TeacherClassServiceInterface {
    public TeacherClass saveTeacherClass(TeacherClass teacherClass);

    public Optional<TeacherClass> getTeacherClassById(int id);

    List<TeacherClass> getAllTeacherClass();

    List<TeacherClass> getClassByTeacherID(int teacherId);

    TeacherClass updateTeacherClass(int id, TeacherClass teacherClass);

    void deleteTeacherClass(int id);
}
