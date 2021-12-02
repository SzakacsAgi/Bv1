package com.university.blogi.persistence.repository;

import com.university.blogi.persistence.entity.CommentSecurityCodeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CommentSecurityCodeRepository extends JpaRepository<CommentSecurityCodeEntity, UUID> {

}
