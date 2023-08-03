package com.yosephco.schoolapp.controller;

import com.yosephco.schoolapp.model.Section;
import com.yosephco.schoolapp.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/school/section")
public class SectionController {

    @Autowired
    private SectionService sectionService; // we are bringing in Student Service instance

    /** This is a post Request, here we are gonna ba saving an Student */
    @PostMapping
    public Section saveSection(@RequestBody Section section) {
        return sectionService.saveSection(section);
    }

    /** Here, we are getting all Student */
    @GetMapping
    public List<Section> getAllSection() {
        return sectionService.getAllSection();
    }

    /** here, we are geting one empployee */
    @GetMapping("/{id}")
    public Optional<Section> getSectionById(@PathVariable int id) {
        return sectionService.getSectionById(id);
    }

    @GetMapping("/course/{courseId}")
    public List<Section> getSectionByCourse(@PathVariable("courseId") String courseId) {
        return sectionService.getAllSectionsByCourse(courseId);
    }

    @GetMapping("/num/{sectionNum}")
    public List<Section> getSectionBySectionNumber(@PathVariable("sectionNum") int sectionNum) {
        return sectionService.getAllSectionsBySectionNum(sectionNum);
    }

    /** here, we get gonna be updating an Student */
    @PutMapping("/{id}")
    public Section updateSection(@PathVariable int id, @RequestBody Section section) {
        return sectionService.updateSection(id, section);
    }

    /** Here, we are gonna be deleting a Student */
    @DeleteMapping("/{id}")
    public void deleteSection(@PathVariable int id) {
        sectionService.deleteSection(id);
    }
}
