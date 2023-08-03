package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.Course;
import com.yosephco.schoolapp.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/course")
public class CourseController {

    @Autowired
    private CourseService courseService; // we are bringing in Student Service instance

    /** This is a post Request, here we are gonna ba saving an Student */
    @PostMapping
    public Course saveCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }

    /** Here, we are getting all Student */
    @GetMapping
    public List<Course> getAllCourse() {
        return courseService.getAllCourse();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<Course> getCourseById(@PathVariable String id) {
        return courseService.getCourseById(id);
    }

    /** here, we get gonna be updating an Student */
    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable String id, @RequestBody Course course) {
        return courseService.updateCourse(id, course);
    }

    /** Here, we are gonna be deleting a Student */
    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable String id) {
        courseService.deleteCourse(id);
    }
}
