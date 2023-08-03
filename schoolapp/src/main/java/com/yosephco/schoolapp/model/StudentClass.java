package com.yosephco.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.Column;

@Entity
@Table(name = "student_class")
public class StudentClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "student_id")
    private int studentId;

    @Column(name = "section_id")
    private int sectionId;

    @Column(name = "year")
    private int year;

    @Column(name = "semester")
    private String semester;

    @Column(name = "currentGrade")
    private double currentGrade;

    public StudentClass() {
    }

    public StudentClass(int id, int studentId, int sectionId, int year, String semester, double currentGrade) {
        this.id = id;
        this.studentId = studentId;
        this.sectionId = sectionId;
        this.year = year;
        this.semester = semester;
        this.currentGrade = currentGrade;
    }

    public void setStudentClass(StudentClass studentClass) {
        this.id = studentClass.getId();
        this.studentId = studentClass.getStudentId();
        this.sectionId = studentClass.getSectionId();
        this.year = studentClass.getYear();
        this.semester = studentClass.getSemester();
        this.currentGrade = studentClass.getCurrentGrade();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
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

    public double getCurrentGrade() {
        return currentGrade;
    }

    public void setCurrentGrade(double currentGrade) {
        this.currentGrade = currentGrade;
    }

}
