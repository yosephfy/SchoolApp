package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.Guardian;
import com.yosephco.schoolapp.service.GuardianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/guardian")
public class GuardianController {

    @Autowired
    private GuardianService guardianService; // we are bringing in Guardian Service instance

    /** This is a post Request, here we are gonna ba saving an Guardian */
    @PostMapping
    public Guardian saveGuardian(@RequestBody Guardian guardian) {
        return guardianService.saveGuardian(guardian);
    }

    /** Here, we are getting all Guardian */
    @GetMapping
    public List<Guardian> getAllGuardian() {
        return guardianService.getAllGuardian();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<Guardian> getGuardianById(@PathVariable int id) {
        return guardianService.getGuardianById(id);
    }

    /** here, we get gonna be updating an Guardian */
    @PutMapping("/{id}")
    public Guardian updateGuardian(@PathVariable int id, @RequestBody Guardian Guardian) {
        return guardianService.updateGuardian(id, Guardian);
    }

    /** Here, we are gonna be deleting a Guardian */
    @DeleteMapping("/{id}")
    public void deleteGuardian(@PathVariable int id) {
        guardianService.deleteGuardian(id);
    }
}
