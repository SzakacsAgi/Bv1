package com.university.blogi.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.university.blogi.controller")
public class BlogiApplication {

    public static void main(final String[] args) {
        SpringApplication.run(BlogiApplication.class, args);
    }
}
