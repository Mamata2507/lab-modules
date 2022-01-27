package edu.miu.cs425.demowebapps.elibrary.elibrary.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePageController {

    @GetMapping({"/", "/elibrary", "/elibrary/home"})
    public String displayHomePage() {
        return "home/index";
    }
}
