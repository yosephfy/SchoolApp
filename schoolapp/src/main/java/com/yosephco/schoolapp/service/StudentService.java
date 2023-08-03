package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.Student;
import com.yosephco.schoolapp.repository.StudentRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class StudentService implements StudentServiceInterface {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        Optional<Student> stu = studentRepository.findById(student.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Student already exists");
        } else
            return studentRepository.save(student);
    }

    @Override
    public Optional<Student> getStudentById(int id) {
        return studentRepository.findById(id);
    }

    @Override
    public List<Student> getAllStudent() {
        return studentRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Student updateStudent(int id, Student student) {
        Student studentToUpdate = studentRepository.findById(id).orElseThrow(null);
        studentToUpdate.setStudent(student);

        return studentRepository.save(student);
    }

    @Override
    public void deleteStudent(int id) {
        studentRepository.deleteById(id);
    }

}
