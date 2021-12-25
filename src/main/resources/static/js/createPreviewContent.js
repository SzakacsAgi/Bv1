function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function addButtonToPreviewContent(whichArticle, parent){
    let button = createNode("a");
    const url = "http://localhost:8080/blogi/article";
    button.classList.add("btn");
    button.classList.add("mt-3", "myButton");
    button.href = url;
    button.innerHTML = "Elolvasom";
    button.id = "article-button"+whichArticle;
    button.target = "_blank";
    append(parent, button);
}

function createCardContainer(parent){
    cardContainer = createNode('div');
    cardContainer.classList.add("col");
    append(parent, cardContainer);
    return cardContainer;
}

function createCard(whichArticle, parent){
    card = createNode('div');
    card.classList.add("card", "mb-3", "center");
    card.id = "card-image"+whichArticle;
    append(parent, card);
    return card;
}

function createImg (article, parent){
    let img = createNode('img');
    img.src = article.imageUrl;
    img.classList.add("card-img-top", "d-none", "d-md-block");
    append(parent, img);
}

function createCardBody(article, parent){
    let cardBody = createNode("div");
    cardBody.classList.add("card-body");
    cardBody.id = "card-body";
    append(parent, cardBody);
    return cardBody;
}

function createPreviewContentTitle(article, parent){
    let title = createNode("h5");
    title.classList.add("card-title");
    title.innerHTML = `${article.title}`;
    append(parent, title);
}

function addPreviewContent(article, parent){
    let previewContent = createNode("p");
    previewContent.classList.add("card-text");
    previewContent.innerHTML = `${article.previewContent}`;
    append(parent, previewContent);
}

function createDateToPreviewContent(article, parent){
    let date = createNode("p");
    date.classList.add("creation-date");
    date.innerHTML = `Megjelenés: ${article.creationDate}`;
    append(parent, date);
}

function createPreviewContent(article, whichArticle){
    const articles = document.getElementById('articles');
    let cardContainer = createCardContainer(articles);
    let card = createCard(whichArticle, cardContainer);
    createImg(article, card);
    let cardBody = createCardBody(article, card);
    createPreviewContentTitle(article, cardBody);
    addPreviewContent(article, cardBody);
    createDateToPreviewContent(article, cardBody);
    addButtonToPreviewContent(whichArticle, cardBody);
 };

 function articleButtonOnClickListener(article, whichArticle){
    var articleButton = document.getElementById("article-button"+whichArticle);
     articleButton.onclick = function(){ localStorage.setItem("articleId", article.id);};
 }