package com.yosephco.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.Column;

@Entity
@Table(name = "teacher_class")
public class TeacherClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "teacher_id")
    private int teacherId;

    @Column(name = "section_id")
    private int sectionId;

    @Column(name = "year")
    private int year;

    @Column(name = "semester")
    private String semester;

    public TeacherClass() {
    }

    public TeacherClass(int id, int teacherId, int sectionId, int year, String semester) {
        this.id = id;
        this.teacherId = teacherId;
        this.sectionId = sectionId;
        this.year = year;
        this.semester = semester;
    }

    public void setTeacherClass(TeacherClass teacherClass) {
        this.id = teacherClass.getId();
        this.teacherId = teacherClass.getStudentId();
        this.sectionId = teacherClass.getSectionId();
        this.year = teacherClass.getYear();
        this.semester = teacherClass.getSemester();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStudentId() {
        return teacherId;
    }

    public void setStudentId(int teacherId) {
        this.teacherId = teacherId;
    }

    public int getSectionId() {
        return sectionId;
    }

    public void setSectionId(int sectionId) {
        this.sectionId = sectionId;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

}
