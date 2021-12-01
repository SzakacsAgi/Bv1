package com.university.blogi.web.rest.controller;

import com.university.blogi.service.CommentService;
import com.university.blogi.service.exception.ArticleNotFoundException;
import com.university.blogi.web.rest.response.CommentResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public record CommentRESTController(CommentService commentService) {

    private static final Logger LOGGER = LoggerFactory.getLogger(CommentRESTController.class);

    @GetMapping(path = "/api/articles/{articleId}/comments")
    public ResponseEntity<CommentResponse> retrieveAllById(@PathVariable final UUID articleId) {
        final var data = commentService.getAllCommentsByArticleId(articleId);
        return ResponseEntity.ok(new CommentResponse(data));
    }

    @ExceptionHandler(ArticleNotFoundException.class)
    private ResponseEntity<Void> handleArticleNotFoundException(final ArticleNotFoundException exception) {
        final var articleId = exception.getId();
        LOGGER.warn("Article is not found with id={}", articleId);
        return notFoundResponse();
    }

    private ResponseEntity<Void> notFoundResponse() {
        return ResponseEntity.notFound().build();
    }
}
