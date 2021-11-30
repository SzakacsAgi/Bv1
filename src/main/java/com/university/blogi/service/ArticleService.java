package com.university.blogi.service;

import com.university.blogi.service.model.Article;
import com.university.blogi.service.model.ArticlePreview;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ArticleService {

    List<ArticlePreview> getAllArticlePreviews();

    Optional<Article> getArticleById(UUID id);
}
