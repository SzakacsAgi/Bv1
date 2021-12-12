function loadArticleData() {
   var id = sessionStorage.getItem("articleId");
    const url = 'http://localhost:8080/blogi/api/articles/' + id;
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
     createArticleContent(data);
  })
  .catch(function(error) {
    console.log(error);
  });
}

sync();
loadArticleData();