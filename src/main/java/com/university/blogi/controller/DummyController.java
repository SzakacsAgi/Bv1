package com.university.blogi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DummyController {

    @GetMapping(path = "/dummy")
    public ModelAndView test() {
        return new ModelAndView("index");
    }
}
