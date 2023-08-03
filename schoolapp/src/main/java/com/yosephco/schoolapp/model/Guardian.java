package com.yosephco.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "guardian")
public class Guardian {
    @Id
    int id;

    String title, firstName, middleName, lastName;
    char gender;
    String email, address, phone, relationship;
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

    public void setEmail(String guardianEmail) {
        this.email = guardianEmail;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String guardianAddress) {
        this.address = guardianAddress;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public Guardian(int guardianID, String firstName, String middleName, String lastName) {
        this.id = guardianID;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;

    }

    public Guardian() {
    }

    public Guardian(int id, String title, String firstName, String middleName, String lastName, char gender,
            String email, String address, String phone, String relationship, String profilePicture) {
        this.id = id;
        this.title = title;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.relationship = relationship;
        this.profilePicture = profilePicture;
    }

    public void setGuardian(Guardian guardian) {
        this.title = guardian.getTitle();
        this.id = guardian.getId();
        this.firstName = guardian.getFirstName();
        this.middleName = guardian.getMiddleName();
        this.lastName = guardian.getLastName();
        this.email = guardian.getEmail();
        this.address = guardian.getAddress();
        this.gender = guardian.getGender();
        this.phone = guardian.getPhone();
        this.relationship = guardian.getRelationship();
        this.profilePicture = guardian.getProfilePicture();
    }

    public int getId() {
        return id;
    }

    public void setId(int guardianID) {
        this.id = guardianID;
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
