package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.Teacher;

import java.util.List;
import java.util.Optional;

public interface TeacherServiceInterface {
    public Teacher saveTeacher(Teacher teacher);

    public Optional<Teacher> getTeacherById(int id);

    List<Teacher> getAllTeacher();

    Teacher updateTeacher(int id, Teacher teacher);

    void deleteTeacher(int id);
}
