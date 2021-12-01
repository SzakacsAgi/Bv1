package com.university.blogi.web.rest.response;

import com.university.blogi.service.model.Comment;

import java.util.List;

public record CommentResponse(List<Comment> comments) {
}
