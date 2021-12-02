package com.university.blogi.web.rest.controller;

import com.university.blogi.service.exception.ArticleNotFoundException;
import com.university.blogi.service.exception.DataMismatchException;
import com.university.blogi.service.exception.PermissionDeniedException;
import com.university.blogi.web.exception.RequestValidationException;
import com.university.blogi.web.rest.response.ValidationErrorResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.convert.ConversionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public record GlobalRESTExceptionHandler(ConversionService conversionService) {

    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalRESTExceptionHandler.class);

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

    @ExceptionHandler(RequestValidationException.class)
    private ResponseEntity<ValidationErrorResponse> handleRequestValidationException(final RequestValidationException exception) {
        final var bindingResult = exception.getBindingResult();
        final var errorResponse = conversionService.convert(bindingResult, ValidationErrorResponse.class);
        LOGGER.warn("Request validation failed, errorResponse={}", errorResponse);
        return badRequestResponse(errorResponse);
    }

    private ResponseEntity<ValidationErrorResponse> badRequestResponse(final ValidationErrorResponse errorResponse) {
        return ResponseEntity.badRequest().body(errorResponse);
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
