package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.Login;
import com.yosephco.schoolapp.repository.LoginRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class LoginService implements LoginServiceInterface {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public void deleteLogin(int id) {
        loginRepository.deleteById(id);
    }

    @Override
    public Login saveLogin(Login login) {
        Optional<Login> stu = loginRepository.findById(login.getLoginId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Student already exists");
        } else
            return loginRepository.save(login);
    }

    @Override
    public Optional<Login> getLoginById(int id) {
        return loginRepository.findById(id);
    }

    @Override
    public List<Login> getAllLogin() {
        return loginRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Login updateLogin(int id, Login login) {
        Login loginToUpdate = loginRepository.findById(id).orElseThrow(null);
        loginToUpdate.setLogin(login);
        return loginRepository.save(login);
    }

    @Override
    public Login findLoginByUserId(int id) {
        return loginRepository.findByUserId(id);
    }

}
