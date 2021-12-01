package com.university.blogi.service.converter;

import com.university.blogi.persistence.entity.CommentEntity;
import com.university.blogi.service.model.Comment;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class CommentEntityToCommentConverter implements Converter<CommentEntity, Comment> {

    @Override
    public Comment convert(final CommentEntity source) {
        return Comment.builder()
                .id(source.getId())
                .authorName(source.getAuthorName())
                .content(source.getContent())
                .creationDate(source.getCreationDate())
                .build();
    }
}
