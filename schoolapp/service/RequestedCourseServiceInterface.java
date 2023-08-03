package com.yosephco.schoolapp.service;

import com.yosephco.schoolapp.model.RequestedCourse;

import java.util.List;
import java.util.Optional;

public interface RequestedCourseServiceInterface {
    public RequestedCourse saveRequestedCourse(RequestedCourse requestedCourse);

    public Optional<RequestedCourse> getRequestedCourseById(int id);

    List<RequestedCourse> getAllRequestedCourse();

    RequestedCourse updateRequestedCourse(int id, RequestedCourse requestedCourse);

    void deleteRequestedCourse(int id);

    public List<RequestedCourse> findRequestedCourseByStudentId(int id);

    public List<RequestedCourse> findRequestedCourseBySectionId(int id);

    public List<RequestedCourse> findRequestedCourseBySemester(String id);

}
