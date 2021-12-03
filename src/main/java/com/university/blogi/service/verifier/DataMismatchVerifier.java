package com.university.blogi.service.verifier;

import com.university.blogi.persistence.entity.CommentEntity;
import com.university.blogi.persistence.repository.ArticleRepository;
import com.university.blogi.service.exception.DataMismatchException;
import org.springframework.stereotype.Component;


import java.util.Optional;
import java.util.UUID;

@Component
public record DataMismatchVerifier(ArticleRepository articleRepository) {

    public void verify(final UUID articleId, final CommentEntity comment) throws DataMismatchException {
        verify(articleId, Optional.ofNullable(comment));
    }

    public void verify(final UUID articleId, final Optional<CommentEntity> comment) throws DataMismatchException {
        final var articleExists = articleRepository.existsById(articleId);
        final var articleDoesNotExist = !articleExists;

        final var articleDoesNotExistButCommentExists = articleDoesNotExist && comment.isPresent();
        final var commentDoesNotBelongToTheExistingArticle = articleExists && comment.isPresent() && isCommentDoesNotBelongToArticle(comment.get(), articleId);

        if (articleDoesNotExistButCommentExists || commentDoesNotBelongToTheExistingArticle) {
            final var commentId = comment.get().getId();
            throw new DataMismatchException(articleId, commentId);
        }
    }

    private boolean isCommentDoesNotBelongToArticle(final CommentEntity comment, final UUID articleId) {
        return !comment.getArticleId().equals(articleId);
    }
}
