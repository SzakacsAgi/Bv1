package com.university.blogi.service.impl;

import com.university.blogi.persistence.repository.ArticleRepository;
import com.university.blogi.persistence.repository.CommentRepository;
import com.university.blogi.service.CommentService;
import com.university.blogi.service.exception.ArticleNotFoundException;
import com.university.blogi.service.model.Comment;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public record CommentServiceImpl(CommentRepository commentRepository,
                                 ArticleRepository articleRepository,
                                 ConversionService conversionService) implements CommentService {

    private static final String COMMENT_ORDER_FIELD = "creationDate";

    @Override
    public List<Comment> getAllCommentsByArticleId(final UUID articleId) throws ArticleNotFoundException {
        final var articleExists = articleRepository.existsById(articleId);

        if (articleExists) {
            return findAllCommentsByArticleId(articleId);
        } else {
            throw new ArticleNotFoundException(articleId);
        }

    }

    private List<Comment> findAllCommentsByArticleId(final UUID articleId) {
        return commentRepository.findAllByArticleId(articleId, Sort.by(Sort.Direction.ASC, COMMENT_ORDER_FIELD))
                .stream()
                .map(commentEntity -> conversionService.convert(commentEntity, Comment.class))
                .collect(Collectors.toList());
    }
}
