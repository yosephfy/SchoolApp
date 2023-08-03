package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.Teacher;
import com.yosephco.schoolapp.repository.TeacherRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class TeacherService implements TeacherServiceInterface {

    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public Teacher saveTeacher(Teacher teacher) {
        Optional<Teacher> stu = teacherRepository.findById(teacher.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Teacher already exists");
        } else
            return teacherRepository.save(teacher);
    }

    @Override
    public Optional<Teacher> getTeacherById(int id) {
        return teacherRepository.findById(id);
    }

    @Override
    public List<Teacher> getAllTeacher() {
        return teacherRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Teacher updateTeacher(int id, Teacher teacher) {
        Teacher teacherToUpdate = teacherRepository.findById(id).orElseThrow(null);
        teacherToUpdate.setTeacher(teacher);
        /*
         * teacherToUpdate.setFirstName(teacher.getFirstName());
         * teacherToUpdate.setMiddleName(teacher.getMiddleName());
         * teacherToUpdate.setLastName(teacher.getLastName());
         * teacherToUpdate.setOverallGrade(teacher.getOverallGrade());
         */
        return teacherRepository.save(teacher);
    }

    @Override
    public void deleteTeacher(int id) {
        teacherRepository.deleteById(id);
    }

}
