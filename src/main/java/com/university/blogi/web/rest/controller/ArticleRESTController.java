package com.university.blogi.web.rest.controller;

import com.university.blogi.service.ArticleService;
import com.university.blogi.service.model.Article;
import com.university.blogi.web.rest.response.ArticlePreviewResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public record ArticleRESTController(ArticleService articleService) {

    @GetMapping(path = "/api/articles")
    public ResponseEntity<ArticlePreviewResponse> retrieveAll() {
        final var data = articleService.getAllArticlePreviews();
        return ResponseEntity.ok(new ArticlePreviewResponse(data));
    }

    @GetMapping(path = "/api/articles/{articleId}")
    public ResponseEntity<Article> retrieveById(@PathVariable final UUID articleId) {
        final var data = articleService.getArticleById(articleId);
        return data.map(ResponseEntity::ok)
                .orElseGet(this::notFoundResponse);
    }

    private ResponseEntity<Article> notFoundResponse() {
        return ResponseEntity.notFound().build();
    }
}
