package com.university.blogi.web.rest.response;

import java.util.Map;

public record ValidationErrorResponse(Map<String, String> errorResponse) {

}
