package com.university.blogi.service.converter;

import com.university.blogi.web.rest.response.ValidationErrorResponse;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.stream.Collectors;

@Component
public class BindingResultToValidationErrorResponseConverter implements Converter<BindingResult, ValidationErrorResponse> {

    @Override
    public ValidationErrorResponse convert(final BindingResult source) {
        final var data = source.getFieldErrors()
                .stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        return new ValidationErrorResponse(data);
    }
}
