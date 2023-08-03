package com.yosephco.schoolapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.yosephco.schoolapp.model.RequestedCourse;
import com.yosephco.schoolapp.repository.RequestedCourseRepository;

import jakarta.persistence.EntityExistsException;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class RequestedCourseService implements RequestedCourseServiceInterface {

    @Autowired
    private RequestedCourseRepository requestedCourseRepository;

    @Override
    public void deleteRequestedCourse(int id) {
        requestedCourseRepository.deleteById(id);
    }

    @Override
    public RequestedCourse saveRequestedCourse(RequestedCourse requestedCourse) {
        Optional<RequestedCourse> stu = requestedCourseRepository.findById(requestedCourse.getId());
        if (stu.isPresent()) {
            throw new EntityExistsException("Student already exists");
        } else
            return requestedCourseRepository.save(requestedCourse);
    }

    @Override
    public Optional<RequestedCourse> getRequestedCourseById(int id) {
        return requestedCourseRepository.findById(id);
    }

    @Override
    public List<RequestedCourse> getAllRequestedCourse() {
        return requestedCourseRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public RequestedCourse updateRequestedCourse(int id, RequestedCourse requestedCourse) {
        RequestedCourse requestedCourseToUpdate = requestedCourseRepository.findById(id).orElseThrow(null);
        requestedCourseToUpdate.setRequestedCourse(requestedCourse);
        return requestedCourseRepository.save(requestedCourse);
    }

    @Override
    public List<RequestedCourse> findRequestedCourseByStudentId(int id) {
        return requestedCourseRepository.findByStudentId(id);
    }

    @Override
    public List<RequestedCourse> findRequestedCourseBySectionId(int id) {
        return requestedCourseRepository.findBySectionId(id);
    }

    @Override
    public List<RequestedCourse> findRequestedCourseBySemester(String id) {
        return requestedCourseRepository.findBySemester(id);
    }

}
