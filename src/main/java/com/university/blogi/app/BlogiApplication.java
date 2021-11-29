package com.university.blogi.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.university.blogi")
@EnableJpaRepositories(basePackages = "com.university.blogi.persistence.repository")
@EntityScan(basePackages = "com.university.blogi.persistence.entity")
public class BlogiApplication {

    public static void main(final String[] args) {
        SpringApplication.run(BlogiApplication.class, args);
    }
}
