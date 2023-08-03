package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.Login;
import com.yosephco.schoolapp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/login")
public class LoginController {

    @Autowired
    private LoginService loginService; // we are bringing in Student Service instance

    /** This is a post Request, here we are gonna ba saving an Student */
    @PostMapping
    public Login saveLogin(@RequestBody Login login) {
        return loginService.saveLogin(login);
    }

    /** Here, we are getting all Student */
    @GetMapping
    public List<Login> getAllLogin() {
        return loginService.getAllLogin();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<Login> getLoginById(@PathVariable int id) {
        return loginService.getLoginById(id);
    }

    @GetMapping("/user/{id}")
    public Login getLoginByUserId(@PathVariable int id) {
        return loginService.findLoginByUserId(id);
    }

    /** here, we get gonna be updating an Student */
    @PutMapping("/{id}")
    public Login updateLogin(@PathVariable int id, @RequestBody Login login) {
        return loginService.updateLogin(id, login);
    }

    /** Here, we are gonna be deleting a Student */
    @DeleteMapping("/{id}")
    public void deleteLogin(@PathVariable int id) {
        loginService.deleteLogin(id);
    }
}
