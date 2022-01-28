package edu.miu.cs425.eregistrar.webapi.seed;

import edu.miu.cs425.eregistrar.webapi.model.International;
import edu.miu.cs425.eregistrar.webapi.model.Student;
import edu.miu.cs425.eregistrar.webapi.service.StudentService;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class StudentData {
    private final StudentService studentService;

    public StudentData(StudentService studentService) {
        this.studentService = studentService;
    }

    private void loadStudents() {
        List<String> studentNames = new ArrayList<>() {{
            add("Mellow");
            add("Google");
            add("Apple");
        }};

        for (int i = 0; i < studentNames.size(); i++) {
            Student student = new Student();

            student.setCgpa(3.20);
            student.setMiddleName("middle");
            student.setLastName(studentNames.get(i));
            student.setFirstName(studentNames.get(i));
            student.setStudentNumber("00-011-612" + i + 1);
            student.setIsInternational((i + 2) % 2 == 0? International.NO : International.YES);
            student.setDateOfEnrollment(LocalDate.of(2021, i + 1, i + 2));

            studentService.createStudent(student);
        }
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        if (studentService.getAll().size() == 0) {
            loadStudents();
        }
    }
}
