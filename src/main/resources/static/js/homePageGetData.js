function loadHomePageData() {
    const url = 'http://localhost:8080/blogi/api/articles';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
         let articles_data = data.articles;
         let whichArticle = 0;
         return articles_data.map(function(article) {
            createPreviewContent(article, whichArticle);
            articleButtonOnClickListener(article, whichArticle);
            whichArticle += 1;
         })
    })
    .catch(function(error) {
        console.log(error);
    });
}

loadHomePageData();