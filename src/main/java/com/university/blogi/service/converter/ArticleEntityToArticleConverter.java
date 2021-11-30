package com.university.blogi.service.converter;

import com.university.blogi.persistence.entity.ArticleEntity;
import com.university.blogi.service.model.Article;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ArticleEntityToArticleConverter implements Converter<ArticleEntity, Article> {

    @Override
    public Article convert(final ArticleEntity source) {
        return Article.builder()
                .id(source.getId())
                .authorName(source.getAuthorName())
                .title(source.getTitle())
                .content(source.getContent())
                .imageUrl(source.getImageUrl())
                .creationDate(source.getCreationDate())
                .build();
    }
}
