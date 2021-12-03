package com.university.blogi.service.impl;

import com.university.blogi.persistence.entity.CommentEntity;
import com.university.blogi.persistence.entity.CommentSecurityCodeEntity;
import com.university.blogi.persistence.repository.ArticleRepository;
import com.university.blogi.persistence.repository.CommentRepository;
import com.university.blogi.persistence.repository.CommentSecurityCodeRepository;
import com.university.blogi.service.CommentService;
import com.university.blogi.service.exception.ArticleNotFoundException;
import com.university.blogi.service.exception.DataMismatchException;
import com.university.blogi.service.model.Comment;
import com.university.blogi.service.verifier.DataMismatchVerifier;
import com.university.blogi.service.verifier.SecurityCodeMismatchVerifier;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
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

    private static final UUID NON_EXISTENT_COMMENT_ID = null;

    @Override
    public Optional<Comment> getByArticleIdAndCommentId(final UUID articleId, final UUID commentId) {
        final var articleExists = articleRepository.existsById(articleId);

        if (articleExists) {
            return findByCommentId(commentId);
        } else {
            throw new DataMismatchException(articleId, commentId);
        }
    }

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
    public UUID create(final UUID articleId, final String authorName, final String content, final String securityCode) {
        final var articleExists = articleRepository.existsById(articleId);

        if (articleExists) {
            return saveComment(articleId, authorName, content, securityCode);
        } else {
            throw new DataMismatchException(articleId, NON_EXISTENT_COMMENT_ID);
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

    private Optional<Comment> findByCommentId(final UUID commentId) {
        return commentRepository.findById(commentId)
                .map(commentEntity -> conversionService.convert(commentEntity, Comment.class));
    }

    private List<Comment> findAllCommentsByArticleId(final UUID articleId) {
        return commentRepository.findAllByArticleId(articleId, Sort.by(Sort.Direction.ASC, COMMENT_ORDER_FIELD))
                .stream()
                .map(commentEntity -> conversionService.convert(commentEntity, Comment.class))
                .collect(Collectors.toList());
    }

    private UUID saveComment(final UUID articleId, final String authorName, final String content, final String securityCode) {
        final var commentId = UUID.randomUUID();
        final var commentEntity = CommentEntity.builder()
                .articleId(articleId)
                .id(commentId)
                .authorName(authorName)
                .content(content)
                .creationDate(LocalDateTime.now())
                .build();
        final var commentSecurityCodeEntity = CommentSecurityCodeEntity.builder()
                .commentId(commentId)
                .securityCode(securityCode)
                .build();

        commentRepository.save(commentEntity);
        commentSecurityCodeRepository.save(commentSecurityCodeEntity);

        return commentId;
    }
}
