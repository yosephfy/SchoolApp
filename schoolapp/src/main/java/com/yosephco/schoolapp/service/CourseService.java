package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.Course;
import com.yosephco.schoolapp.repository.CourseRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CourseService implements CourseServiceInterface {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public void deleteCourse(String id) {
        courseRepository.deleteById(id);
    }

    @Override
    public Course saveCourse(Course course) {
        Optional<Course> stu = courseRepository.findById(course.getName());
        if (stu.isPresent()) {
            throw new EntityExistsException("Student already exists");
        } else
            return courseRepository.save(course);
    }

    @Override
    public Optional<Course> getCourseById(String id) {
        return courseRepository.findById(id);
    }

    @Override
    public List<Course> getAllCourse() {
        return courseRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    @Override
    public Course updateCourse(String id, Course course) {
        Course courseToUpdate = courseRepository.findById(id).orElseThrow(null);
        courseToUpdate.setCourse(course);
        return courseRepository.save(course);
    }

}
