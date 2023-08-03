package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.Student;

import java.util.List;
import java.util.Optional;

public interface StudentServiceInterface {
    public Student saveStudent(Student student);

    public Optional<Student> getStudentById(int id);

    List<Student> getAllStudent();

    Student updateStudent(int id, Student Student);

    void deleteStudent(int id);
}
