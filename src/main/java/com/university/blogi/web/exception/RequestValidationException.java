package com.university.blogi.web.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.validation.BindingResult;

@Data
@AllArgsConstructor
public class RequestValidationException extends RuntimeException {

    private final BindingResult bindingResult;
}
