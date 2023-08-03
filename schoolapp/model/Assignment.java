package com.yosephco.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "assignments")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "type")
    private String type;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "rubric")
    private String rubric;

    @Column(name = "num_of_questions")
    private int numOfQuestions;

    @Column(name = "total_points")
    private int totalPoints;

    @Column(name = "allowed_attempts")
    private int allowedAttempts;

    @Column(name = "section_id")
    private int sectionId;

    @Column(name = "due_date")
    private String dueDate;

    @Column(name = "due_time")
    private String dueTime;

    @Column(name = "time_limit")
    private String timeLimit;

    public Assignment() {
    }

    public Assignment(int id, String type, String title, String description, String rubric, int numOfQuestions,
            int totalPoints, int allowedAttempts, int sectionId, String dueDate, String dueTime, String timeLimit) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.description = description;
        this.rubric = rubric;
        this.numOfQuestions = numOfQuestions;
        this.totalPoints = totalPoints;
        this.allowedAttempts = allowedAttempts;
        this.sectionId = sectionId;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.timeLimit = timeLimit;
    }

    public void setAssignment(Assignment assignment) {
        this.id = assignment.getId();
        this.type = assignment.getType();
        this.title = assignment.getTitle();
        this.description = assignment.getDescription();
        this.rubric = assignment.getRubric();
        this.numOfQuestions = assignment.getNumOfQuestions();
        this.totalPoints = assignment.getTotalPoints();
        this.allowedAttempts = assignment.getAllowedAttempts();
        this.sectionId = assignment.getSectionId();
        this.dueDate = assignment.getDueDate();
        this.dueTime = assignment.getDueTime();
        this.timeLimit = assignment.getTimeLimit();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRubric() {
        return rubric;
    }

    public void setRubric(String rubric) {
        this.rubric = rubric;
    }

    public int getNumOfQuestions() {
        return numOfQuestions;
    }

    public void setNumOfQuestions(int numOfQuestions) {
        this.numOfQuestions = numOfQuestions;
    }

    public int getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(int totalPoints) {
        this.totalPoints = totalPoints;
    }

    public int getAllowedAttempts() {
        return allowedAttempts;
    }

    public void setAllowedAttempts(int allowedAttempts) {
        this.allowedAttempts = allowedAttempts;
    }

    public int getSectionId() {
        return sectionId;
    }

    public void setSectionId(int sectionId) {
        this.sectionId = sectionId;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getDueTime() {
        return dueTime;
    }

    public void setDueTime(String dueTime) {
        this.dueTime = dueTime;
    }

    public String getTimeLimit() {
        return timeLimit;
    }

    public void setTimeLimit(String timeLimit) {
        this.timeLimit = timeLimit;
    }

}
