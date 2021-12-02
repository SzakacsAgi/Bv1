package com.university.blogi.web.rest.controller;

import com.university.blogi.service.CommentService;
import com.university.blogi.service.exception.ArticleNotFoundException;
import com.university.blogi.service.exception.DataMismatchException;
import com.university.blogi.service.exception.PermissionDeniedException;
import com.university.blogi.web.rest.request.CommentRemovalRequest;
import com.university.blogi.web.rest.response.CommentResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public record CommentRESTController(CommentService commentService) {

    private static final Logger LOGGER = LoggerFactory.getLogger(CommentRESTController.class);

    @GetMapping(path = "/api/articles/{articleId}/comments")
    public ResponseEntity<CommentResponse> retrieveAllById(@PathVariable final UUID articleId) {
        final var data = commentService.getAllCommentsByArticleId(articleId);
        return ResponseEntity.ok(new CommentResponse(data));
    }

    @DeleteMapping(path = "/api/articles/{articleId}/comments/{commentId}")
    public ResponseEntity<CommentResponse> removeById(@PathVariable final UUID articleId,
                                                      @PathVariable final UUID commentId,
                                                      @RequestBody final CommentRemovalRequest request) {
        LOGGER.info("Receiving delete comment request, articleId={} commentId={} request={}", articleId, commentId, request);
        commentService.delete(articleId, commentId, request.securityCode());
        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(ArticleNotFoundException.class)
    private ResponseEntity<Void> handleArticleNotFoundException(final ArticleNotFoundException exception) {
        final var articleId = exception.getId();
        LOGGER.warn("Article is not found with id={}", articleId);
        return notFoundResponse();
    }

    @ExceptionHandler(DataMismatchException.class)
    private ResponseEntity<Void> handleDataMismatchException(final DataMismatchException exception) {
        final var articleId = exception.getArticleId();
        final var commentId = exception.getCommentId();
        LOGGER.warn("Data ids are not matching, articleId={} commentId={}", articleId, commentId);
        return conflictResponse();
    }

    @ExceptionHandler(PermissionDeniedException.class)
    private ResponseEntity<Void> handlePermissionDeniedException(final PermissionDeniedException exception) {
        final var articleId = exception.getArticleId();
        final var commentId = exception.getCommentId();
        final var operation = exception.getOperation();
        LOGGER.warn("Operation={} is not allowed to be performed, articleId={} commentId={}", operation, articleId, commentId);
        return forbiddenResponse();
    }

    private ResponseEntity<Void> notFoundResponse() {
        return ResponseEntity.notFound().build();
    }

    private ResponseEntity<Void> conflictResponse() {
        return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    private ResponseEntity<Void> forbiddenResponse() {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
}
