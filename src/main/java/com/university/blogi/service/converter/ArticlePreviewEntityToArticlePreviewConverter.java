package com.university.blogi.service.converter;

import com.university.blogi.persistence.entity.ArticlePreviewEntity;
import com.university.blogi.service.model.ArticlePreview;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ArticlePreviewEntityToArticlePreviewConverter implements Converter<ArticlePreviewEntity, ArticlePreview> {

    @Override
    public ArticlePreview convert(final ArticlePreviewEntity source) {
        return ArticlePreview.builder()
                .id(source.getId())
                .authorName(source.getAuthorName())
                .title(source.getTitle())
                .previewContent(source.getPreviewContent())
                .imageUrl(source.getImageUrl())
                .creationDate(source.getCreationDate())
                .build();
    }
}
