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
    button.classList.add("btn-primary");
    button.href = url;
    button.innerHTML = "Elolvasom";
    button.id = "article-button"+whichArticle;
    button.target = "_blank";
    append(parent, button);
}

function createImg (article, parent){
    let img = createNode('img');
    img.src = article.imageUrl;
    img.classList.add("card-img-top");
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
    const div = document.getElementById('card-image' + whichArticle);
    createImg(article, div);
    let cardBody = createCardBody(article, div);
    createPreviewContentTitle(article, cardBody);
    addPreviewContent(article, cardBody);
    createDateToPreviewContent(article, cardBody);
    addButtonToPreviewContent(whichArticle, cardBody);
 };

 function articleButtonOnClickListener(article, whichArticle){
    var articleButton = document.getElementById("article-button"+whichArticle);
     articleButton.onclick = function(){ localStorage.setItem("articleId", article.id);};
 }