package com.university.blogi.persistence.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "COMMENTS")
public class CommentEntity {

    @Id
    private UUID id;

    @Column(name = "article_id")
    private UUID articleId;

    @Column(name = "author_name")
    private String authorName;

    @Column(name = "content")
    private String content;

    @Column(name = "creation_date")
    private LocalDateTime creationDate;
}
