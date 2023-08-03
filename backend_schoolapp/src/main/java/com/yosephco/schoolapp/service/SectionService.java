package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.Section;
import com.yosephco.schoolapp.repository.SectionRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class SectionService implements SectionServiceInterface {

    @Autowired
    private SectionRepository sectionRepository;

    @Override
    public void deleteSection(int id) {
        sectionRepository.deleteById(id);
    }

    @Override
    public Section saveSection(Section section) {
        Optional<Section> stu = sectionRepository.findById(section.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Section already exists");
        } else
            return sectionRepository.save(section);
    }

    @Override
    public Optional<Section> getSectionById(int id) {
        return sectionRepository.findById(id);
    }

    @Override
    public List<Section> getAllSection() {
        return sectionRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Section updateSection(int id, Section section) {
        Section sectionToUpdate = sectionRepository.findById(id).orElseThrow(null);
        sectionToUpdate.setSection(section);
        return sectionRepository.save(section);
    }

    @Override
    public List<Section> getAllSectionsByCourse(String course_id) {
        return sectionRepository.findByCourseId(course_id);
    }

    @Override
    public List<Section> getAllSectionsBySectionNum(int sectionNum) {
        return sectionRepository.findBySectionNum(sectionNum);
    }

}
