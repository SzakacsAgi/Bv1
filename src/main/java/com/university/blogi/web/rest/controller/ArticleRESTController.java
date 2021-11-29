package com.university.blogi.web.rest.controller;

import com.university.blogi.service.ArticleService;
import com.university.blogi.web.rest.response.ArticlePreviewResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public record ArticleRESTController(ArticleService articleService) {

    @GetMapping(path = "/api/articles")
    public ResponseEntity<ArticlePreviewResponse> retrieveAll() {
        final var data = articleService.getAllArticlePreviews();
        return ResponseEntity.ok(new ArticlePreviewResponse(data));
    }
}
