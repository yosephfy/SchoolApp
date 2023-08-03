package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.TeacherClass;
import com.yosephco.schoolapp.repository.TeacherClassRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class TeacherClassService implements TeacherClassServiceInterface {

    @Autowired
    private TeacherClassRepository teacherClassRepository;

    @Override
    public void deleteTeacherClass(int id) {
        teacherClassRepository.deleteById(id);
    }

    @Override
    public TeacherClass saveTeacherClass(TeacherClass teacherClass) {
        Optional<TeacherClass> stu = teacherClassRepository.findById(teacherClass.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Teacher already exists");
        } else
            return teacherClassRepository.save(teacherClass);
    }

    @Override
    public Optional<TeacherClass> getTeacherClassById(int id) {
        return teacherClassRepository.findById(id);
    }

    @Override
    public List<TeacherClass> getAllTeacherClass() {
        return teacherClassRepository.findAll(Sort.by(Sort.Direction.ASC, "year"));
    }

    @Override
    public TeacherClass updateTeacherClass(int id, TeacherClass teacherClass) {
        TeacherClass teacherClassToUpdate = teacherClassRepository.findById(id).orElseThrow(null);
        teacherClassToUpdate.setTeacherClass(teacherClass);
        return teacherClassRepository.save(teacherClass);
    }

    @Override
    public List<TeacherClass> getClassByTeacherID(int teacherId) {
        return teacherClassRepository.findAllTeacherClassByTeacherId(teacherId);
    }

}
