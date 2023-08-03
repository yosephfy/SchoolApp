package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.yosephco.schoolapp.model.StudentClass;
import com.yosephco.schoolapp.repository.StudentClassRepository;

import jakarta.persistence.EntityExistsException;

@Service
public class StudentClassService implements StudentClassServiceInterface {

    @Autowired
    private StudentClassRepository studentClassRepository;

    @Override
    public void deleteStudentClass(int id) {
        studentClassRepository.deleteById(id);
    }

    @Override
    public StudentClass saveStudentClass(StudentClass studentClass) {
        Optional<StudentClass> stu = studentClassRepository.findById(studentClass.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Student already exists");
        } else
            return studentClassRepository.save(studentClass);
    }

    @Override
    public Optional<StudentClass> getStudentClassById(int id) {
        return studentClassRepository.findById(id);
    }

    @Override
    public List<StudentClass> getAllStudentClass() {
        return studentClassRepository.findAll(Sort.by(Sort.Direction.ASC, "year"));
    }

    @Override
    public StudentClass updateStudentClass(int id, StudentClass studentClass) {
        StudentClass studentClassToUpdate = studentClassRepository.findById(id).orElseThrow(null);
        studentClassToUpdate.setStudentClass(studentClass);
        return studentClassRepository.save(studentClass);
    }

    @Override
    public List<StudentClass> getClassByStudentID(int studentId) {
        return studentClassRepository.findAllStudentClassByStudentId(studentId);
    }

    @Override
    public List<StudentClass> getClassBySectionId(int sectionId) {
        return studentClassRepository.findAllStudentClassBySectionId(sectionId);
    }

    //

}
