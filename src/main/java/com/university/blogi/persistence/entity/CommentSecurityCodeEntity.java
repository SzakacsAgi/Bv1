package com.university.blogi.persistence.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "COMMENTS_SECURITY_CODE")
public class CommentSecurityCodeEntity {

    @Id
    @Column(name = "comment_id")
    private UUID commentId;

    @Column(name = "security_code")
    private String securityCode;
}
