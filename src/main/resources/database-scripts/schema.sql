CREATE TABLE ARTICLES (
  id UUID NOT NULL,
  title VARCHAR(250) NOT NULL,
  author_name VARCHAR(250) NOT NULL,
  preview_content VARCHAR(500) NOT NULL,
  content VARCHAR(500) NOT NULL,
  image_url VARCHAR(250) NOT NULL,
  creation_date DATETIME NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE COMMENTS (
  id UUID NOT NULL,
  article_id UUID NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  content VARCHAR(500) NOT NULL,
  creation_date DATETIME NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(article_id) REFERENCES ARTICLES(id)
);

CREATE TABLE COMMENTS_SECURITY_CODE (
  comment_id UUID NOT NULL,
  security_code VARCHAR(250) NOT NULL,

  FOREIGN KEY(comment_id) REFERENCES COMMENTS(id)
);