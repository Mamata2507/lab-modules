package edu.miu.cs425.eregistrar.webapi.service.impl;

import edu.miu.cs425.eregistrar.webapi.model.Student;
import edu.miu.cs425.eregistrar.webapi.repository.StudentRepository;
import edu.miu.cs425.eregistrar.webapi.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {
    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    public boolean deleteStudent(Long studentId) {
        Student student = findById(studentId);
        if (student != null) {
            studentRepository.delete(student);
            return true;
        }
        return false;
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> searchStudentsBy(String searchParam) {
        List<Student> students = getAll();
        if (searchParam == null) {
            return students;
        }
        return students.stream()
                .filter(student -> student.getStudentNumber().toLowerCase().contains(searchParam.toLowerCase()) ||
                        student.getFirstName().toLowerCase().contains(searchParam.toLowerCase()) ||
                        student.getLastName().toLowerCase().contains(searchParam.toLowerCase()) ||
                        student.getMiddleName().toLowerCase().contains(searchParam.toLowerCase())
                ).collect(Collectors.toList());
    }

    public Student updateStudent(Long studentId, Student student) {
        Student attachedStudent = findById(studentId);
        if (attachedStudent == null) {
            return studentRepository.save(student);
        }
        attachedStudent.setCgpa(student.getCgpa());
        attachedStudent.setLastName(student.getLastName());
        attachedStudent.setFirstName(student.getFirstName());
        attachedStudent.setMiddleName(student.getMiddleName());
        attachedStudent.setStudentNumber(student.getStudentNumber());
        attachedStudent.setIsInternational(student.getIsInternational());
        attachedStudent.setDateOfEnrollment(student.getDateOfEnrollment());

        return studentRepository.save(attachedStudent);
    }

    public Student findById(Long studentId) {
        return studentRepository.findById(studentId).orElse(null);
    }
}
