function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function createArticleContent(article){
    const div = document.getElementById("article");
    let img = createNode("img");
    img.src = article.imageUrl;
    img.classList.add("img");
    let imgWrapper = createNode("div");
    imgWrapper.classList.add("img-wrapper");
    let title = createNode("h1");
    title.classList.add("title");
    title.innerHTML = `${article.title}`;
    let authorName = createNode("div");
    authorName.classList.add("author");
    authorName.innerHTML = `Írta: ${article.authorName}`;
    let creationDate = createNode("span");
    creationDate.innerHTML = `Publikálva: ${article.creationDate}`;
    let fullContent = createNode("div");
    fullContent.classList.add("fullContent");
    fullContent.innerHTML = `${article.content}`;
    append(div, imgWrapper);
    append(imgWrapper, img);
    append(div, title);
    append(div, authorName);
    append(authorName, creationDate);
    append(div, fullContent);
};





