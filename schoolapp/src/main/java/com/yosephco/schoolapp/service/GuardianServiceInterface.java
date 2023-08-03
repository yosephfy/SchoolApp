package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.Guardian;

import java.util.List;
import java.util.Optional;

public interface GuardianServiceInterface {
    public Guardian saveGuardian(Guardian guardian);

    public Optional<Guardian> getGuardianById(int id);

    List<Guardian> getAllGuardian();

    Guardian updateGuardian(int id, Guardian Guardian);

    void deleteGuardian(int id);
}
