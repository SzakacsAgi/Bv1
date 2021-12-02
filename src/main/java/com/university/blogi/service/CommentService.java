package com.university.blogi.service;

import com.university.blogi.service.exception.ArticleNotFoundException;
import com.university.blogi.service.model.Comment;

import java.util.List;
import java.util.UUID;

public interface CommentService {

    List<Comment> getAllCommentsByArticleId(UUID articleId) throws ArticleNotFoundException;

    void delete(UUID articleId, UUID commentId, String securityCode);
}
