package edu.miu.cs425.eregistrar.webapi.controller;

import edu.miu.cs425.eregistrar.webapi.model.Student;
import edu.miu.cs425.eregistrar.webapi.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(originPatterns = "*", allowedHeaders = "*")
@RequestMapping({"/eregistrar/api/student", "/api/student"})
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Student>> getAllStudents() {
        return ResponseEntity.ok(studentService.getAll());
    }

    @PostMapping("/register")
    public ResponseEntity<Student> registerStudent(@Valid @RequestBody Student student) {
        return new ResponseEntity<>(
                studentService.createStudent(student),
                HttpStatus.CREATED
        );
    }

    @GetMapping("/get/{studentId}")
    public ResponseEntity<Student> getStudentById(@PathVariable("studentId") Long studentId) {
        Student student = studentService.findById(studentId);
        if (student == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(student);
    }

    @PutMapping("/update/{studentId}")
    public ResponseEntity<Student> updateStudentById(
            @PathVariable("studentId") Long studentId,
            @Valid @RequestBody Student student
    ) {
        Student updateStudent = studentService.updateStudent(studentId, student);
        return ResponseEntity.ok(updateStudent);
    }

    @DeleteMapping("/delete/{studentId}")
    public ResponseEntity<?> deleteStudentById(
            @PathVariable("studentId") Long studentId
    ) {
        boolean deleted = studentService.deleteStudent(studentId);
        if (!deleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().build();
    }
}
