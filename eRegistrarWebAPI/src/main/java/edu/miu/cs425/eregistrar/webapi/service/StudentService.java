package edu.miu.cs425.eregistrar.webapi.service;

import edu.miu.cs425.eregistrar.webapi.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();
    Student findById(Long studentId);
    boolean deleteStudent(Long studentId);
    Student createStudent(Student student);
    List<Student> searchStudentsBy(String searchParam);
    Student updateStudent(Long studentId, Student student);
}
