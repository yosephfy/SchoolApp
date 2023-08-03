package com.yosephco.schoolapp.repository;

import com.yosephco.schoolapp.model.Login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
    Login findByUserId(int id);
}
