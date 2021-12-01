INSERT INTO ARTICLES (id, title, author_name, preview_content, content, image_url, creation_date) VALUES
  ('4cf059db-e3bf-4bd4-b6be-395e5179aca8',
  'Title_1', 'Author_1',
  'Preview_content_1',
  'Full_content_1',
  'https://s05.static.libri.hu/cover/c6/1/822705_5.jpg',
  CAST('2021-11-20 09:25:55' AS DATETIME));





INSERT INTO ARTICLES (id, title, author_name, preview_content, content, image_url, creation_date) VALUES
  ('818d1ba0-3a04-48c3-a409-5922630b21c6',
  'Title_2', 'Author_2',
  'Preview_content_2',
  'Full_content_2',
  'https://i.pinimg.com/originals/78/98/af/7898af50d726a143dfa3a694051199c6.jpg',
  CAST('2021-11-28 09:25:55' AS DATETIME));

INSERT INTO COMMENTS (id, article_id, author_name, content, creation_date) VALUES
  ('871622b4-ea87-40e5-86ba-8b3c40110f03',
  '818d1ba0-3a04-48c3-a409-5922630b21c6',
  'Author_first_comment',
  'Content_first_comment',
  CAST('2021-11-28 09:45:55' AS DATETIME));

INSERT INTO COMMENTS_SECURITY_CODE (comment_id, security_code) VALUES
  ('871622b4-ea87-40e5-86ba-8b3c40110f03',
  'Security_code_1');




INSERT INTO ARTICLES (id, title, author_name, preview_content, content, image_url, creation_date) VALUES
  ('d71ab202-abab-4623-a395-436f4c5bfab2',
  'Title_3', 'Author_3',
  'Preview_content_3',
  'Full_content_3',
  'https://pictyourlamp.com/wp-content/uploads/2021/04/lampe-3d-logo-manchester-city.jpg',
  CAST('2021-11-28 09:25:56' AS DATETIME));

INSERT INTO COMMENTS (id, article_id, author_name, content, creation_date) VALUES
  ('f7dc345a-d0cb-4bcb-b3c3-90d519443d03',
  'd71ab202-abab-4623-a395-436f4c5bfab2',
  'Author_first_comment',
  'Content_first_comment',
  CAST('2021-11-28 09:55:59' AS DATETIME));

INSERT INTO COMMENTS_SECURITY_CODE (comment_id, security_code) VALUES
  ('f7dc345a-d0cb-4bcb-b3c3-90d519443d03',
  'Security_code_1');

INSERT INTO COMMENTS (id, article_id, author_name, content, creation_date) VALUES
  ('5126528a-931a-4c23-83b4-6514b4af398d',
  'd71ab202-abab-4623-a395-436f4c5bfab2',
  'Author_second_comment',
  'Content_second_comment',
  CAST('2021-11-28 09:56:55' AS DATETIME));

INSERT INTO COMMENTS_SECURITY_CODE (comment_id, security_code) VALUES
  ('5126528a-931a-4c23-83b4-6514b4af398d',
  'Security_code_2');

INSERT INTO COMMENTS (id, article_id, author_name, content, creation_date) VALUES
  ('9a3e8f89-f488-45ef-8c0d-bf194e0695a4',
  'd71ab202-abab-4623-a395-436f4c5bfab2',
  'Author_third_comment',
  'Content_third_comment',
  CAST('2021-11-28 09:56:56' AS DATETIME));

INSERT INTO COMMENTS_SECURITY_CODE (comment_id, security_code) VALUES
  ('9a3e8f89-f488-45ef-8c0d-bf194e0695a4',
  'Security_code_3');