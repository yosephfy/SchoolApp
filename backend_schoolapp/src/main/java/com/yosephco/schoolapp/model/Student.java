package com.yosephco.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
    @Id
    int id;
    String firstName, middleName, lastName;
    char gender;
    String email, address;
    int gradeLevel;
    int firstGuardianId, secondGuardianId;
    int councilorId, homeRoomId;
    String profilePicture;

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String studentEmail) {
        this.email = studentEmail;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String studentAddress) {
        this.address = studentAddress;
    }

    public int getGradeLevel() {
        return gradeLevel;
    }

    public void setGradeLevel(int gradeLevel) {
        this.gradeLevel = gradeLevel;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public Student(int studentID, String firstName, String middleName, String lastName) {
        this.id = studentID;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;

    }

    public Student() {
    }

    public Student(int id, String firstName, String middleName, String lastName, char gender, String email,
            String address, int gradeLevel, int firstGuardianId, int secondGuardianId, int councilorId, int homeRoomId,
            String profilePicture) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.gradeLevel = gradeLevel;
        this.firstGuardianId = firstGuardianId;
        this.secondGuardianId = secondGuardianId;
        this.councilorId = councilorId;
        this.homeRoomId = homeRoomId;
        this.profilePicture = profilePicture;
    }

    public void setStudent(Student student) {
        this.id = student.getId();
        this.firstName = student.getFirstName();
        this.middleName = student.getMiddleName();
        this.lastName = student.getLastName();
        this.gender = student.getGender();
        this.email = student.getEmail();
        this.address = student.getAddress();
        this.gradeLevel = student.getGradeLevel();
        this.firstGuardianId = student.getFirstGuardianId();
        this.secondGuardianId = student.getSecondGuardianId();
        this.councilorId = student.getCouncilorId();
        this.homeRoomId = student.getHomeRoomId();
        this.profilePicture = student.getProfilePicture();
    }

    public int getFirstGuardianId() {
        return firstGuardianId;
    }

    public void setFirstGuardianId(int firstGuardianId) {
        this.firstGuardianId = firstGuardianId;
    }

    public int getSecondGuardianId() {
        return secondGuardianId;
    }

    public void setSecondGuardianId(int secondGuardianId) {
        this.secondGuardianId = secondGuardianId;
    }

    public int getId() {
        return id;
    }

    public void setId(int studentID) {
        this.id = studentID;
    }

    public int getCouncilorId() {
        return councilorId;
    }

    public void setCouncilorId(int assignedCouncilor) {
        this.councilorId = assignedCouncilor;
    }

    public int getHomeRoomId() {
        return homeRoomId;
    }

    public void setHomeRoomId(int homeRoomTeacher) {
        this.homeRoomId = homeRoomTeacher;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

}
