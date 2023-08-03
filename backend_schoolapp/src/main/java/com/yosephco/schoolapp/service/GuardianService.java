package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.Guardian;
import com.yosephco.schoolapp.repository.GuardianRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class GuardianService implements GuardianServiceInterface {

    @Autowired
    private GuardianRepository guardianRepository;

    @Override
    public Guardian saveGuardian(Guardian guardian) {
        Optional<Guardian> stu = guardianRepository.findById(guardian.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Guardian already exists");
        } else
            return guardianRepository.save(guardian);
    }

    @Override
    public Optional<Guardian> getGuardianById(int id) {
        return guardianRepository.findById(id);
    }

    @Override
    public List<Guardian> getAllGuardian() {
        return guardianRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Guardian updateGuardian(int id, Guardian guardian) {
        Guardian guardianToUpdate = guardianRepository.findById(id).orElseThrow(null);
        guardianToUpdate.setGuardian(guardian);
        return guardianRepository.save(guardian);
    }

    @Override
    public void deleteGuardian(int id) {
        guardianRepository.deleteById(id);
    }

}
