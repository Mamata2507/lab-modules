package edu.miu.cs425.eregistrar.eregistrar.controller;

import edu.miu.cs425.eregistrar.eregistrar.model.Student;
import edu.miu.cs425.eregistrar.eregistrar.service.StudentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.List;

@Controller
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping({"/student/list", "/registrar/student/list"})
    public ModelAndView getAllStudents() {
        ModelAndView modelAndView = new ModelAndView();
        List<Student> students = studentService.getAll();

        modelAndView.addObject("students", students);
        modelAndView.addObject("searchString", "");
        modelAndView.addObject("studentsCount", students.size());
        modelAndView.setViewName("student/list");
        return modelAndView;
    }

    @GetMapping(value = {"/registrar/student/new","/student/new"})
    public String displayRegisterStudentForm(Model model) {
        model.addAttribute("student", new Student());
        return "student/new";
    }

    @PostMapping(value = {"/registrar/student/new","/student/new"})
    public String createNewStudent(@Valid @ModelAttribute("student") Student student,
                             BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            model.addAttribute("errors", bindingResult.getAllErrors());
            return "student/new";
        }
        studentService.createStudent(student);
        return "redirect:/registrar/student/list";
    }

    @GetMapping(value = {"/registrar/student/edit/{studentId}","/student/edit/{studentId}"})
    public String updateStudent(@PathVariable Long studentId, Model model) {
        Student student = studentService.findById(studentId);
        if (student != null) {
            model.addAttribute("student", student);
            return "student/edit";
        }
        return "student/list";
    }

    @PostMapping(value = {"/registrar/student/edit","/student/edit"})
    public String updateStudent(@Valid @ModelAttribute("student") Student student,
                                BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            model.addAttribute("errors", bindingResult.getAllErrors());
            return "student/edit";
        }
        student = studentService.updateStudent(student.getStudentId(), student);
        model.addAttribute("student", student);
        return "redirect:/registrar/student/list";
    }

    @GetMapping(value = {"/registrar/student/delete/{studentId}","/student/student/{studentId}"})
    public String deleteStudent(@PathVariable Long studentId) {
        studentService.deleteStudent(studentId);
        return "redirect:/registrar/student/list";
    }

    @GetMapping(value = {"/registrar/student/search", "/student/search"})
    public ModelAndView searchStudents(@RequestParam String searchString) {
        ModelAndView modelAndView = new ModelAndView();

        List<Student> students = studentService.searchStudentsBy(searchString);

        modelAndView.addObject("students", students);
        modelAndView.addObject("searchString", searchString);
        modelAndView.addObject("studentsCount", students.size());
        modelAndView.setViewName("student/list");

        return modelAndView;
    }
}
