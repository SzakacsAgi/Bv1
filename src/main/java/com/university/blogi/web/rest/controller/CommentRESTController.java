package com.university.blogi.web.rest.controller;

import com.university.blogi.service.CommentService;
import com.university.blogi.service.exception.CommentNotFoundException;
import com.university.blogi.service.model.Comment;
import com.university.blogi.web.exception.RequestValidationException;
import com.university.blogi.web.rest.request.CommentCreationRequest;
import com.university.blogi.web.rest.request.CommentRemovalRequest;
import com.university.blogi.web.rest.request.CommentUpdateRequest;
import com.university.blogi.web.rest.response.CommentResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.UUID;

@RestController
public record CommentRESTController(CommentService commentService) {

    private static final Logger LOGGER = LoggerFactory.getLogger(CommentRESTController.class);

    @GetMapping(path = "/api/articles/{articleId}/comments")
    public ResponseEntity<CommentResponse> retrieveAllById(@PathVariable final UUID articleId) {
        final var data = commentService.getAllCommentsByArticleId(articleId);
        return ResponseEntity.ok(new CommentResponse(data));
    }

    @GetMapping(path = "/api/articles/{articleId}/comments/{commentId}")
    public ResponseEntity<Comment> retrieveById(@PathVariable final UUID articleId, @PathVariable final UUID commentId) {
        final var data = commentService.getByArticleIdAndCommentId(articleId, commentId)
                .orElseThrow(() -> new CommentNotFoundException(commentId));
        return ResponseEntity.ok(data);
    }

    @DeleteMapping(path = "/api/articles/{articleId}/comments/{commentId}")
    public ResponseEntity<CommentResponse> removeById(@PathVariable final UUID articleId,
                                                      @PathVariable final UUID commentId,
                                                      @RequestBody final CommentRemovalRequest request) {
        LOGGER.info("Receiving delete comment request, articleId={} commentId={} request={}", articleId, commentId, request);
        commentService.delete(articleId, commentId, request.securityCode());
        return ResponseEntity.noContent().build();
    }

    @PostMapping(path = "/api/articles/{articleId}/comments")
    public ResponseEntity<CommentResponse> create(@PathVariable final UUID articleId,
                                                  @RequestBody @Valid final CommentCreationRequest request,
                                                  final BindingResult bindingResult) {
        LOGGER.info("Receiving create comment request, articleId={} request={}", articleId, request);

        if (hasValidationError(bindingResult)) {
            throw new RequestValidationException(bindingResult);
        }

        final var authorName = request.authorName();
        final var content = request.content();
        final var securityCode = request.securityCode();

        final var commentId = commentService.create(articleId, authorName, content, securityCode);

        return ResponseEntity.created(createLocationWith(commentId)).build();
    }

    @PutMapping(path = "/api/articles/{articleId}/comments/{commentId}")
    public ResponseEntity<CommentResponse> update(@PathVariable final UUID articleId,
                                                  @PathVariable final UUID commentId,
                                                  @RequestBody @Valid final CommentUpdateRequest request,
                                                  final BindingResult bindingResult) {
        LOGGER.info("Receiving update comment request, articleId={} commentId={} request={}", articleId, commentId, request);

        if (hasValidationError(bindingResult)) {
            throw new RequestValidationException(bindingResult);
        }

        final var authorName = request.authorName();
        final var content = request.content();
        final var securityCode = request.securityCode();

        commentService.update(articleId, commentId, authorName, content, securityCode);

        return ResponseEntity.noContent().build();
    }

    private boolean hasValidationError(final BindingResult bindingResult) {
        return bindingResult.hasFieldErrors();
    }

    private URI createLocationWith(final UUID commentId) {
        return ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{commentId}")
                .buildAndExpand(commentId)
                .toUri();
    }

}
