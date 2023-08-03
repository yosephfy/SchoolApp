package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.Section;

import java.util.List;
import java.util.Optional;

public interface SectionServiceInterface {
    public Section saveSection(Section section);

    public Optional<Section> getSectionById(int id);

    List<Section> getAllSection();

    Section updateSection(int id, Section section);

    void deleteSection(int id);

    List<Section> getAllSectionsByCourse(String course_id);

    List<Section> getAllSectionsBySectionNum(int sectionNum);

}
