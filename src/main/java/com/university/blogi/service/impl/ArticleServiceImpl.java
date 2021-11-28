package com.university.blogi.service.impl;

import com.university.blogi.persistence.repository.ArticlePreviewRepository;
import com.university.blogi.service.ArticleService;
import com.university.blogi.service.model.ArticlePreview;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public record ArticleServiceImpl (ArticlePreviewRepository repository, ConversionService conversionService) implements ArticleService {

    private static final String ARTICLE_PREVIEW_ORDER_FIELD = "creationDate";

    @Override
    public List<ArticlePreview> getAllArticlePreviews() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, ARTICLE_PREVIEW_ORDER_FIELD))
                .stream()
                .map(articlePreviewEntity -> conversionService.convert(articlePreviewEntity, ArticlePreview.class))
                .collect(Collectors.toList());
    }
}
