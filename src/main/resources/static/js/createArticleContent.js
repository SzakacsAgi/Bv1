function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function createImg(article, div){
    let img = createNode("img");
    img.src = article.imageUrl;
    img.classList.add("img");
    let imgWrapper = createNode("div");
    imgWrapper.classList.add("img-wrapper");
    append(div, imgWrapper);
    append(imgWrapper, img);
}

function createTitle(article, div){
    let title = createNode("h1");
    title.classList.add("title");
    title.innerHTML = `${article.title}`;
    append(div, title);
}

function createAuthorName(article, div){
    let authorName = createNode("div");
    authorName.classList.add("author");
    authorName.innerHTML = `Írta: ${article.authorName}`;
    append(div, authorName);
    return authorName;
}

function createCreationDate(article, authorName){
    let creationDate = createNode("span");
    creationDate.innerHTML = `Publikálva: ${article.creationDate}`;
    append(authorName, creationDate);
}

function createFullContent(article, div){
    let fullContent = createNode("div");
    fullContent.classList.add("fullContent");
    fullContent.innerHTML = `${article.content}`;
    append(div, fullContent);
}

function createArticleContent(article){
    const div = document.getElementById("article");
    createImg(article, div);
    createTitle(article, div);
    authorName = createAuthorName(article, div);
    createCreationDate(article, authorName);
    createFullContent(article, div);
};