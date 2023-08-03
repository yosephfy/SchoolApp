package com.yosephco.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "pre_reqs")
    private String pre_reqs;

    public Course() {
    }

    public Course(int id, String name, String title, String description, String pre_reqs) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.pre_reqs = pre_reqs;
    }

    public void setCourse(Course course) {
        this.id = course.getId();
        this.name = course.getName();
        this.title = course.getTitle();
        this.description = course.getDescription();
        this.pre_reqs = course.getPre_reqs();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getPre_reqs() {
        return pre_reqs;
    }

    public void setPre_reqs(String pre_reqs) {
        this.pre_reqs = pre_reqs;
    }

}
