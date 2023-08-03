package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.Teacher;
import com.yosephco.schoolapp.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService; // we are bringing in teacher Service instance

    /** This is a post Request, here we are gonna ba saving an teacher */
    @PostMapping
    public Teacher saveteacher(@RequestBody Teacher teacher) {
        return teacherService.saveTeacher(teacher);
    }

    /** Here, we are getting all teacher */
    @GetMapping
    public List<Teacher> getAllTeacher() {
        return teacherService.getAllTeacher();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<Teacher> getTeacherById(@PathVariable int id) {
        return teacherService.getTeacherById(id);
    }

    /** here, we get gonna be updating an teacher */
    @PutMapping("/{id}")
    public Teacher updateteacher(@PathVariable int id, @RequestBody Teacher teacher) {
        return teacherService.updateTeacher(id, teacher);
    }

    /** Here, we are gonna be deleting a teacher */
    @DeleteMapping("/{id}")
    public void deleteTeacher(@PathVariable int id) {
        teacherService.deleteTeacher(id);
    }
}
