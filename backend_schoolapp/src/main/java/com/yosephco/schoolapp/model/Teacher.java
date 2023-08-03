package com.yosephco.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "teacher")
public class Teacher {
    @Id
    int id;
    String title, firstName, middleName, lastName;
    char gender;
    String email, address, phone;
    String qualifications;
    String profilePicture;

    public Teacher() {
    }

    public Teacher(int id, String title, String firstName, String middleName, String lastName, char gender,
            String email, String address, String phone, String qualifications, String profilePicture) {
        this.id = id;
        this.title = title;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.qualifications = qualifications;
        this.profilePicture = profilePicture;
    }

    public void setTeacher(Teacher teacher) {
        this.id = teacher.getId();
        this.title = teacher.getTitle();
        this.firstName = teacher.getFirstName();
        this.middleName = teacher.getMiddleName();
        this.lastName = teacher.getLastName();
        this.gender = teacher.getGender();
        this.email = teacher.getEmail();
        this.address = teacher.getAddress();
        this.phone = teacher.getPhone();
        this.qualifications = teacher.getQualifications();
        this.profilePicture = teacher.getProfilePicture();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getQualifications() {
        return qualifications;
    }

    public void setQualifications(String qualifications) {
        this.qualifications = qualifications;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

}
