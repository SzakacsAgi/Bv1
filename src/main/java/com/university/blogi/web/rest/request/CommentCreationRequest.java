package com.university.blogi.web.rest.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public record CommentCreationRequest(@NotBlank(message = "{request.validation.authorName}") String authorName,
                                     @NotBlank(message = "{request.validation.content}") @Size(min = 2, message = "{request.validation.content}") String content,
                                     @NotBlank(message = "{request.validation.securityCode}") @Size(min = 2, message = "{request.validation.securityCode}") String securityCode) {

}
