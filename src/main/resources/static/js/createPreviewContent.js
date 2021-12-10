function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function addAttributesToButton(button, index){
    const url = "http://localhost:8080/blogi/article";
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.href = url;
    button.innerHTML = "Elolvasom";
    button.id = "article-button"+index;
    button.target = "_blank";
}

function createPreviewContent(article, index){
    const div = document.getElementById('card-image' + index);
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
    addAttributesToButton(button, index);
    append(div, img);
    append(div, cardBody);
    append(cardBody, title);
    append(cardBody, previewContent);
    append(cardBody, date);
    append(cardBody, button);
    var articleButton = document.getElementById("article-button"+index);
    articleButton.onclick = function(){ localStorage.setItem("articleId", article.id);};
 };