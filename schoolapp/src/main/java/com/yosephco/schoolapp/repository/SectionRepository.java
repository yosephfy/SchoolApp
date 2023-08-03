package com.yosephco.schoolapp.repository;

import com.yosephco.schoolapp.model.Section;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectionRepository extends JpaRepository<Section, Integer> {
    List<Section> findByCourseId(String course);

    List<Section> findBySectionNum(int section);

}
