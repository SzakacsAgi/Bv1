package com.university.blogi.web.rest.response;

import com.university.blogi.service.model.ArticlePreview;

import java.util.List;

public record ArticlePreviewResponse(List<ArticlePreview> articles) {
}
