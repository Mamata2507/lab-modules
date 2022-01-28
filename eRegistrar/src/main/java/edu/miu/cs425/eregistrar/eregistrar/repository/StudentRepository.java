package edu.miu.cs425.eregistrar.eregistrar.repository;

import edu.miu.cs425.eregistrar.eregistrar.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findAllByFirstNameOrLastNameOrMiddleNameOrStudentNumber(
            String firstName,
            String lastName,
            String middleName,
            String studentNumber
    );
}
