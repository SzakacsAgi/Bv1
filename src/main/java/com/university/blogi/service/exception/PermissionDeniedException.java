package com.university.blogi.service.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@AllArgsConstructor
@Data
public class PermissionDeniedException extends RuntimeException {

    private final UUID articleId;
    private final UUID commentId;
    private final String operation;
}
