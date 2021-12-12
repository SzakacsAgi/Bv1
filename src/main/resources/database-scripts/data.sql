INSERT INTO ARTICLES (id, title, author_name, preview_content, content, image_url, creation_date) VALUES
  ('4cf059db-e3bf-4bd4-b6be-395e5179aca8',
  'Talán már magától értetődő általános utazási tippek indulás előttre', 'András',
  'Mindig rájövök arra, hogy a sok év alatt tapasztalatként összegyűjtött, számomra már magától értetődő tippek és teendők egy kevésbé tapasztalt utazónak mennyire nem egyértelműek. Ezért összegyűjtöttem őket ide nektek egy csokorba.',
  '<div class = “container”> <p> Ez lesz a tartalom </p> </div>',
  'https://i.pinimg.com/originals/a0/d5/15/a0d5157efeec8b765326fc1184509ab1.png',
  CAST('2021-07-30 10:43:28' AS DATETIME));




INSERT INTO ARTICLES (id, title, author_name, preview_content, content, image_url, creation_date) VALUES
  ('818d1ba0-3a04-48c3-a409-5922630b21c6',
  'A legjobb repülőjegy kereső oldalak összehasonlítása', 'András',
  'Melyik a legjobb repülőjegy kereső oldal? Nincs olyan, az egyik ebben jó, a másik abban. Ebben a felsorolásban bemutatom az általam legjobbaknak tartott oldalak előnyeit és hátrányait.',
  '<div class = “container”> <p> Ez lesz a tartalom </p> </div>',
  'https://thumbs.dreamstime.com/b/two-airline-tickets-airplane-boarding-ticket-passenger-name-airlines-flight-invitation-airplanes-pass-vector-traveler-164126383.jpg_',
  CAST('2021-06-13 14:22:12' AS DATETIME));

INSERT INTO COMMENTS (id, article_id, author_name, content, creation_date) VALUES
  ('871622b4-ea87-40e5-86ba-8b3c40110f03',
  '4cf059db-e3bf-4bd4-b6be-395e5179aca8',
  'Kis Pista',
  'Kedves András! Köszönöm szépen a remek tippeket. Én még meg szoktam bízni valakit, hogy a postaládát rendszeresen ürítse ki, hogy ne tűnjön fel, hogy nem vagyok otthon és a postán is beszólok, hogy mettől meddig vagyok távol és a tértivevényes leveleket nem küldjék vissza és a postásunk is tudjon a távollétemről.',
  CAST('2021-11-28 09:45:55' AS DATETIME));

INSERT INTO COMMENTS_SECURITY_CODE (comment_id, security_code) VALUES
  ('871622b4-ea87-40e5-86ba-8b3c40110f03',
  '0312');

  INSERT INTO COMMENTS (id, article_id, author_name, content, creation_date) VALUES
    ('871622b4-ea87-40e5-86ba-8b3c40112465',
    '4cf059db-e3bf-4bd4-b6be-395e5179aca8',
    'Lakatos Eszter',
    'Az offline szótár letöltése?? Inkább kérdezem, mint javaslom, mert épp most indulok nagyútra, de köszönöm a cikket, mert a családomtól a leghasznosabb tipp eddig az volt, hogy tésztaszűrőt azért ne vigyek…',
    CAST('2021-08-10 20:38:55' AS DATETIME));

INSERT INTO COMMENTS_SECURITY_CODE (comment_id, security_code) VALUES
  ('871622b4-ea87-40e5-86ba-8b3c40112465',
  'Eszter vagyok');



INSERT INTO ARTICLES (id, title, author_name, preview_content, content, image_url, creation_date) VALUES
  ('d71ab202-abab-4623-a395-436f4c5bfab2',
  'Hol tudsz olcsó utasbiztosítást kötni?', 'András',
  'Azt hiszem senkinek nem kell azt magyaráznom, hogy miért fontos biztosítást kötni. Elmesélhetnék itt 1-2, akár több balszerencsés kimenetelü története, de nem fogok. Csak annyit mondok: utas biztosítás nélkül tilos útnak indulni!',
  '<div class = "container"> <p> Ez lesz a tartalom </p> </div>',
  'https://utazaskatalogus.hu/wp-content/uploads/2019/07/utasbiztositas-kulfoldon.jpg',
  CAST('2021-08-08 09:43:54' AS DATETIME));

INSERT INTO COMMENTS (id, article_id, author_name, content, creation_date) VALUES
  ('9a3e8f89-f488-45ef-8c0d-bf194e0695a4',
  'd71ab202-abab-4623-a395-436f4c5bfab2',
  'Sütő Jakab',
  'Kedves András! Nagyon hasznos cikknek gondolom, köszönöm a tájékoztatást!',
  CAST('2021-11-28 09:56:56' AS DATETIME));

INSERT INTO COMMENTS_SECURITY_CODE (comment_id, security_code) VALUES
  ('9a3e8f89-f488-45ef-8c0d-bf194e0695a4',
  'Család1453');
