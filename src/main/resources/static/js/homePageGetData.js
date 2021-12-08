var imported = document.createElement("script");
imported.src = "createPreviewContent.js";
document.head.appendChild(imported);

function loadHomePageData() {
    const url = 'http://localhost:8080/blogi/api/articles';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
     let articles_data = data.articles;
     let index = 0;
     return articles_data.map(function(article) {
        createPreviewContent(article, index);
        index += 1;
  })
  })
  .catch(function(error) {
    console.log(error);
  });
}

loadHomePageData();
