package com.university.blogi.service.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class Article {

    private final UUID id;

    private final String title;

    private final String authorName;

    private final String content;

    private final String imageUrl;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private final LocalDateTime creationDate;
}
