function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function loadData() {
  const div = document.getElementById('card-image0');
  const url = 'http://localhost:8080/blogi/api/articles';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
  let articles_data = data.articles;
  console.log(articles_data);
  let index = 0;
  return articles_data.map(function(article) {
    console.log(article);
    console.log(index);
    if(index == 0){
        let img = createNode('img');
        img.src = article.imageUrl;
        img.classList.add("card-img-top");
        let cardBody = createNode("div");
        cardBody.classList.add("card-body");
        cardBody.id = "card-body";
        let title = createNode("h5");
        title.classList.add("card-title");
        title.innerHTML = `${article.title}`;
        let previewContent = createNode("p");
        previewContent.classList.add("card-text");
        previewContent.innerHTML = `${article.previewContent}`;
        let date = createNode("p");
        date.classList.add("creation-date");
        date.innerHTML = `Megjelenés: ${article.creationDate}`;
        let button = createNode("a");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.href.innerHTML = `http://localhost:8080/blogi/api/articles/${article.id}`;
        button.innerHTML = "Elolvasom";
        append(div, img);
        append(div, cardBody);
        append(cardBody, title);
        append(cardBody, previewContent);
        append(cardBody, date);
        append(cardBody, button)
    }

    if(index == 1){
        const div = document.getElementById('card-image1');
        let img = createNode('img');
                img.src = article.imageUrl;
                img.classList.add("card-img-top");
                let cardBody = createNode("div");
                cardBody.classList.add("card-body");
                cardBody.id = "card-body";
                let title = createNode("h5");
                title.classList.add("card-title");
                title.innerHTML = `${article.title}`;
                let previewContent = createNode("p");
                previewContent.classList.add("card-text");
                previewContent.innerHTML = `${article.previewContent}`;
                let date = createNode("p");
                date.classList.add("creation-date");
                date.innerHTML = `Megjelenés: ${article.creationDate}`;
                let button = createNode("a");
                button.classList.add("btn");
                button.classList.add("btn-primary");
                button.href.innerHTML = `http://localhost:8080/blogi/api/articles/${article.id}`;
                button.innerHTML = "Elolvasom";
                append(div, img);
                append(div, cardBody);
                append(cardBody, title);
                append(cardBody, previewContent);
                append(cardBody, date);
                append(cardBody, button)
    }
    if(index == 2){
            const div = document.getElementById('card-image2');
            let img = createNode('img');
                    img.src = article.imageUrl;
                    img.classList.add("card-img-top");
                    let cardBody = createNode("div");
                    cardBody.classList.add("card-body");
                    cardBody.id = "card-body";
                    let title = createNode("h5");
                    title.classList.add("card-title");
                    title.innerHTML = `${article.title}`;
                    let previewContent = createNode("p");
                    previewContent.classList.add("card-text");
                    previewContent.innerHTML = `${article.previewContent}`;
                    let date = createNode("p");
                    date.classList.add("creation-date");
                    date.innerHTML = `Megjelenés: ${article.creationDate}`;
                    let button = createNode("a");
                    button.classList.add("btn");
                    button.classList.add("btn-primary");
                    button.href = "#";
                    button.innerHTML = "Elolvasom";
                    append(div, img);
                    append(div, cardBody);
                    append(cardBody, title);
                    append(cardBody, previewContent);
                    append(cardBody, date);
                    append(cardBody, button)
        }
       index += 1;
  })
  })
  .catch(function(error) {
    console.log(error);
  });
}

loadData();