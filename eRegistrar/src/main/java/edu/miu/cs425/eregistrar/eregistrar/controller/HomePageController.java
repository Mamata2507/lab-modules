package edu.miu.cs425.eregistrar.eregistrar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePageController {

    @GetMapping({"/", "/registrar", "/registrar/home"})
    public String displayHomePage() {
        return "home/index";
    }
}
