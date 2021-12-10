
function loadArticleData() {
   var id = localStorage.getItem("id");
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

loadArticleData();