package com.yosephco.schoolapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "RequestedCourse")
public class RequestedCourse {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "student_id")
    int studentId;

    @Column(name = "section_id")
    int sectionId;

    @Column(name = "semester")
    String semester;

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

    public RequestedCourse() {
    }

    public RequestedCourse(int id, int studentId, int sectionId, String semester) {
        this.id = id;
        this.studentId = studentId;
        this.sectionId = sectionId;
        this.semester = semester;
    }

    public void setRequestedCourse(RequestedCourse requestedCourse) {
        this.id = requestedCourse.getId();
        this.studentId = requestedCourse.getStudentId();
        this.sectionId = requestedCourse.getSectionId();
        this.semester = requestedCourse.getSemester();
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }
}
