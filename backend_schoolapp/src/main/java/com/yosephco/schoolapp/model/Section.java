package com.yosephco.schoolapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sections")
public class Section {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "section_num")
    private int sectionNum;

    @JoinColumn(name = "course_id")
    private String courseId;

    @Column(name = "teacher_id")
    private int teacherId;

    @Column(name = "date")
    private String date;

    @Column(name = "start_time")
    private String startTime;

    @Column(name = "duration")
    private String duration;

    public Section() {
    }

    public void setSection(Section section) {
        this.id = section.getId();
        this.sectionNum = section.getSectionNum();
        this.courseId = section.getCourseId();
        this.teacherId = section.getTeacherId();
        this.startTime = section.getStartTime();
        this.duration = section.getDuration();
        this.date = section.getDate();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSectionNum() {
        return sectionNum;
    }

    public void setSectionNum(int sectionNum) {
        this.sectionNum = sectionNum;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Section(int id, int sectionNum, String courseId, int teacherId, String date, String startTime,
            String duration) {
        this.id = id;
        this.sectionNum = sectionNum;
        this.courseId = courseId;
        this.teacherId = teacherId;
        this.date = date;
        this.startTime = startTime;
        this.duration = duration;
    }

}
