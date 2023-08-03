package com.yosephco.schoolapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Login")
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    int userId;
    String password, email;
    String category;

    public Login() {
    }

    public Login(int id, int userId, String password, String email, String catagory) {
        this.id = id;
        this.userId = userId;
        this.password = password;
        this.email = email;
        this.category = catagory;
    }

    public int getLoginId() {
        return id;
    }

    public void setLoginId(int id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String catagory) {
        this.category = catagory;
    }

    public void setLogin(Login login) {
        this.userId = login.userId;
        this.id = login.id;
        this.password = login.password;
        this.email = login.email;
        this.category = login.category;
    }
}
