package com.university.blogi.service.exception;

import java.util.UUID;

public class CommentNotFoundException extends DataNotFoundException {

    public CommentNotFoundException(final UUID id) {
        super(id);
    }
}
