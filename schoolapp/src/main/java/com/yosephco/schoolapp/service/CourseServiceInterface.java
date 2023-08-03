package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.Course;

import java.util.List;
import java.util.Optional;

public interface CourseServiceInterface {
    public Course saveCourse(Course course);

    public Optional<Course> getCourseById(String id);

    List<Course> getAllCourse();

    Course updateCourse(String id, Course course);

    void deleteCourse(String id);
}
