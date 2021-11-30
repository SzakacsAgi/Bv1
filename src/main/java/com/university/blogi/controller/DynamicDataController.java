package com.university.blogi.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.university.blogi.service.model.ArticlePreview;
import com.university.blogi.web.rest.response.ArticlePreviewResponse;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
public class DynamicDataController {

    private final DynamicDataResponseWrapper dynamicDataResponseWrapper = new DynamicDataResponseWrapper(new ArrayList<>());
    private int id = 0;

    @GetMapping(path = "/api/dynamic-data")
    public ResponseEntity<DynamicDataResponseWrapper> retrieveAll() {
        dynamicDataResponseWrapper.data().add(new DynamicData(++id, LocalDateTime.now()));
        return ResponseEntity.ok(dynamicDataResponseWrapper);
    }

    private record DynamicData(Integer id, @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime date) {
    }

    private record DynamicDataResponseWrapper(List<DynamicData> data) {

    }
}
