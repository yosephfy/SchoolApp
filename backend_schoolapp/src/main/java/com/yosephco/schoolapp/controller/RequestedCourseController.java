package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.RequestedCourse;
import com.yosephco.schoolapp.service.RequestedCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/requested_course")
public class RequestedCourseController {

    @Autowired
    private RequestedCourseService requestedCourseService; // we are bringing in Student Service instance

    /** This is a post Request, here we are gonna ba saving an Student */
    @PostMapping
    public RequestedCourse saveRequestedCourse(@RequestBody RequestedCourse requestedCourse) {
        return requestedCourseService.saveRequestedCourse(requestedCourse);
    }

    /** Here, we are getting all Student */
    @GetMapping
    public List<RequestedCourse> getAllRequestedCourse() {
        return requestedCourseService.getAllRequestedCourse();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<RequestedCourse> getRequestedCourseById(@PathVariable int id) {
        return requestedCourseService.getRequestedCourseById(id);
    }

    @GetMapping("/student/{id}")
    public List<RequestedCourse> getRequestedCourseByStudentId(@PathVariable int id) {
        return requestedCourseService.findRequestedCourseByStudentId(id);
    }

    @GetMapping("/section/{id}")
    public List<RequestedCourse> getRequestedCourseBySectionId(@PathVariable int id) {
        return requestedCourseService.findRequestedCourseBySectionId(id);
    }

    @GetMapping("/semester/{id}")
    public List<RequestedCourse> getRequestedCourseBySemester(@PathVariable String id) {
        return requestedCourseService.findRequestedCourseBySemester(id);
    }

    /** here, we get gonna be updating an Student */
    @PutMapping("/{id}")
    public RequestedCourse updateRequestedCourse(@PathVariable int id, @RequestBody RequestedCourse requestedCourse) {
        return requestedCourseService.updateRequestedCourse(id, requestedCourse);
    }

    /** Here, we are gonna be deleting a Student */
    @DeleteMapping("/{id}")
    public void deleteRequestedCourse(@PathVariable int id) {
        requestedCourseService.deleteRequestedCourse(id);
    }
}
