package com.university.blogi.service.impl;

import com.university.blogi.persistence.repository.ArticlePreviewRepository;
import com.university.blogi.persistence.repository.ArticleRepository;
import com.university.blogi.service.ArticleService;
import com.university.blogi.service.model.Article;
import com.university.blogi.service.model.ArticlePreview;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public record ArticleServiceImpl (ArticlePreviewRepository articlePreviewRepository, ArticleRepository articleRepository, ConversionService conversionService) implements ArticleService {

    private static final String ARTICLE_PREVIEW_ORDER_FIELD = "creationDate";

    @Override
    public List<ArticlePreview> getAllArticlePreviews() {
        return articlePreviewRepository.findAll(Sort.by(Sort.Direction.DESC, ARTICLE_PREVIEW_ORDER_FIELD))
                .stream()
                .map(articlePreviewEntity -> conversionService.convert(articlePreviewEntity, ArticlePreview.class))
                .collect(Collectors.toList());
    }

    @Override
    public Optional<Article> getArticleById(final UUID id) {
        return articleRepository.findById(id)
                .map(articleEntity -> conversionService.convert(articleEntity, Article.class));
    }
}
