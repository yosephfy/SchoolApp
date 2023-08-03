package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.TeacherClass;
import com.yosephco.schoolapp.service.TeacherClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/teacher_class")
public class TeacherClassController {

    @Autowired
    private TeacherClassService teacherClassService; // we are bringing in Teacher Service instance

    /** This is a post Request, here we are gonna ba saving an Teacher */
    @PostMapping
    public TeacherClass saveTeacherClass(@RequestBody TeacherClass teacherClass) {
        return teacherClassService.saveTeacherClass(teacherClass);
    }

    /** Here, we are getting all Teacher */
    @GetMapping
    public List<TeacherClass> getAllTeacherClass() {
        return teacherClassService.getAllTeacherClass();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<TeacherClass> getTeacherClassById(@PathVariable int id) {
        return teacherClassService.getTeacherClassById(id);
    }

    @GetMapping("/schedule/{teacherId}")
    public List<TeacherClass> getTeacherClassByTeacherId(@PathVariable int teacherId) {
        return teacherClassService.getClassByTeacherID(teacherId);
    }

    /** here, we get gonna be updating an Teacher */
    @PutMapping("/{id}")
    public TeacherClass updateTeacherClass(@PathVariable int id, @RequestBody TeacherClass teacherClass) {
        return teacherClassService.updateTeacherClass(id, teacherClass);
    }

    /** Here, we are gonna be deleting a Teacher */
    @DeleteMapping("/{id}")
    public void deleteTeacherClass(@PathVariable int id) {
        teacherClassService.deleteTeacherClass(id);
    }
}
