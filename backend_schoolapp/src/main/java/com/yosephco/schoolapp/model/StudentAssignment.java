package com.yosephco.schoolapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Student_assignment")
public class StudentAssignment {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "student_id")
    int studentId;

    @Column(name = "assignment_id")
    int assignmentId;

    @Column(name = "score")
    double score;

    @Column(name = "status")
    String status;

    public int getId() {
        return id;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
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

    public int getAssignmentId() {
        return assignmentId;
    }

    public void setAssignmentId(int assignmentId) {
        this.assignmentId = assignmentId;
    }

    public StudentAssignment() {
    }

    public StudentAssignment(int id, int studentId, double score, int assignmentId, String status) {
        this.id = id;
        this.studentId = studentId;
        this.assignmentId = assignmentId;
        this.status = status;
        this.score = score;
    }

    public void setStudentAssignment(StudentAssignment studentAssignment) {
        this.id = studentAssignment.getId();
        this.studentId = studentAssignment.getStudentId();
        this.assignmentId = studentAssignment.getAssignmentId();
        this.status = studentAssignment.getStatus();
        this.score = studentAssignment.getScore();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
