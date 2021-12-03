package com.university.blogi.service.verifier;

import com.university.blogi.persistence.entity.CommentSecurityCodeEntity;
import com.university.blogi.persistence.repository.ArticleRepository;
import com.university.blogi.service.exception.PermissionDeniedException;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.UUID;

@Component
public record SecurityCodeMismatchVerifier(ArticleRepository articleRepository) {

    public void verify(final String securityCode, final Optional<CommentSecurityCodeEntity> savedSecurityCode,
                       final UUID articleId, final UUID commentId, final String operation) throws PermissionDeniedException {

        if (savedSecurityCode.isPresent() && securityCodeDoesNotMatch(savedSecurityCode, securityCode)) {
            throw new PermissionDeniedException(articleId, commentId, operation);
        }
    }

    private boolean securityCodeDoesNotMatch(final Optional<CommentSecurityCodeEntity> commentSecurityCodeEntity, final String securityCode) {
        return commentSecurityCodeEntity.map(CommentSecurityCodeEntity::getSecurityCode)
                .filter(savedSecurityCode -> savedSecurityCode.equals(securityCode))
                .isEmpty();
    }
}
