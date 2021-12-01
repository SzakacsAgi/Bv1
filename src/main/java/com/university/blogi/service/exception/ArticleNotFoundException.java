package com.university.blogi.service.exception;

import java.util.UUID;

public class ArticleNotFoundException extends DataNotFoundException {

    public ArticleNotFoundException(final UUID id) {
        super(id);
    }
}
