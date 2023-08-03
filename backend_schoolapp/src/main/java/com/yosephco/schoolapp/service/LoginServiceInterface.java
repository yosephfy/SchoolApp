package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.Login;

import java.util.List;
import java.util.Optional;

public interface LoginServiceInterface {
    public Login saveLogin(Login login);

    public Optional<Login> getLoginById(int id);

    List<Login> getAllLogin();

    Login updateLogin(int id, Login login);

    void deleteLogin(int id);

    public Login findLoginByUserId(int id);
}
