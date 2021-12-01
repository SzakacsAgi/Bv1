package com.university.blogi.service.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@AllArgsConstructor
@Data
public class DataNotFoundException extends RuntimeException {

    private final UUID id;
}
