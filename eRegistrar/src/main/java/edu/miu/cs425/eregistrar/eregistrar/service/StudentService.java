package edu.miu.cs425.eregistrar.eregistrar.service;

import edu.miu.cs425.eregistrar.eregistrar.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();
    Student findById(Long studentId);
    void deleteStudent(Long studentId);
    Student createStudent(Student student);
    List<Student> searchStudentsBy(String searchParam);
    Student updateStudent(Long studentId, Student student);
}
