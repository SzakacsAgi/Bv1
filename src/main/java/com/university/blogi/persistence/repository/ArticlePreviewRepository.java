package com.university.blogi.persistence.repository;

import com.university.blogi.persistence.entity.ArticlePreviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ArticlePreviewRepository extends JpaRepository<ArticlePreviewEntity, UUID> {
}
