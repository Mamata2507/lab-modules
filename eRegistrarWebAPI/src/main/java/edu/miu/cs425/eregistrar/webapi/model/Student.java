package edu.miu.cs425.eregistrar.webapi.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "students")
public class Student {
    @Id @GeneratedValue
    private Long studentId;

    @NotBlank
    @Column(nullable = false)
    private String studentNumber;

    @NotBlank
    @Column(nullable = false)
    private String firstName;

    private String middleName;

    @Column(nullable = false)
    private String lastName;

    private Double cgpa;

    @NotNull
    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfEnrollment;

    private International isInternational;

    public Student() {}

    public Student(
            @NotBlank String studentNumber,
            @NotBlank String firstName,
            String middleName,
            @NotBlank String lastName,
            @NotNull Double cgpa,
            @NotNull LocalDate dateOfEnrollment
    ) {
        this.cgpa = cgpa;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.studentNumber = studentNumber;
        this.dateOfEnrollment = dateOfEnrollment;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Double getCgpa() {
        return cgpa;
    }

    public void setCgpa(Double cgpa) {
        this.cgpa = cgpa;
    }

    public LocalDate getDateOfEnrollment() {
        return dateOfEnrollment;
    }

    public void setDateOfEnrollment(LocalDate dateOfEnrollment) {
        this.dateOfEnrollment = dateOfEnrollment;
    }

    public International getIsInternational() {
        return isInternational;
    }

    public void setIsInternational(International isInternational) {
        this.isInternational = isInternational;
    }

    public String toString() {
        return "{" + "studentId= " + studentId +
                ", studentNO = '" + studentNumber + '\'' +
                ", firstName = '" + firstName + '\'' +
                ", lastName = '" + lastName + '\'' +
                ", cgpa = " + cgpa +
                ", dateOfEnrollment = " + dateOfEnrollment + '}';
    }
}
