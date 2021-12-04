package com.university.blogi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ArticleController {

    @GetMapping(path = "/article")
    public ModelAndView article() {
        return new ModelAndView("article");
    }
}
