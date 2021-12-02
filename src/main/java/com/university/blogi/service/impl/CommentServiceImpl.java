package com.university.blogi.service.impl;

import com.university.blogi.persistence.repository.ArticleRepository;
import com.university.blogi.persistence.repository.CommentRepository;
import com.university.blogi.persistence.repository.CommentSecurityCodeRepository;
import com.university.blogi.service.CommentService;
import com.university.blogi.service.exception.ArticleNotFoundException;
import com.university.blogi.service.model.Comment;
import com.university.blogi.service.verifier.DataMismatchVerifier;
import com.university.blogi.service.verifier.SecurityCodeMismatchVerifier;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public record CommentServiceImpl(CommentRepository commentRepository,
                                 ArticleRepository articleRepository,
                                 CommentSecurityCodeRepository commentSecurityCodeRepository,
                                 ConversionService conversionService,
                                 DataMismatchVerifier dataMismatchVerifier,
                                 SecurityCodeMismatchVerifier securityCodeMismatchVerifier) implements CommentService {

    private static final String COMMENT_ORDER_FIELD = "creationDate";

    private static final String DELETE_OPERATION = "DELETE";

    @Override
    public List<Comment> getAllCommentsByArticleId(final UUID articleId) throws ArticleNotFoundException {
        final var articleExists = articleRepository.existsById(articleId);

        if (articleExists) {
            return findAllCommentsByArticleId(articleId);
        } else {
            throw new ArticleNotFoundException(articleId);
        }

    }

    @Override
    public void delete(final UUID articleId, final UUID commentId, final String securityCode) {
        final var comment = commentRepository.findById(commentId);
        dataMismatchVerifier.verify(articleId, comment);

        final var savedSecurityCode = commentSecurityCodeRepository.findById(commentId);
        securityCodeMismatchVerifier.verify(securityCode, savedSecurityCode, articleId, commentId, DELETE_OPERATION);

        savedSecurityCode.ifPresent($ -> commentSecurityCodeRepository.deleteById(commentId));
        comment.ifPresent($ -> commentRepository.deleteById(commentId));
    }

    private List<Comment> findAllCommentsByArticleId(final UUID articleId) {
        return commentRepository.findAllByArticleId(articleId, Sort.by(Sort.Direction.ASC, COMMENT_ORDER_FIELD))
                .stream()
                .map(commentEntity -> conversionService.convert(commentEntity, Comment.class))
                .collect(Collectors.toList());
    }
}
