function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function createCommentsContainer(parent){
    let container = createNode("div");
    container.classList.add("row", "d-flex", "justify-content-center");
    append(parent, container);
    return container;
}

function createDivOfOneComment(parent){
    let divOfOneComment = createNode("div");
    divOfOneComment.classList.add("card", "p-3", "my-1");
    append(parent, divOfOneComment);
    return divOfOneComment;
}

function createCreationDateAndCommentAuthorDiv(parent){
    let creationDateAndCommentAuthorDiv = createNode("div");
    creationDateAndCommentAuthorDiv.classList.add("d-flex", "justify-content-between", "align-items-center");
    append(parent, creationDateAndCommentAuthorDiv);
    return creationDateAndCommentAuthorDiv;
}

function createContainerOfAuthorName(parent){
    let containerOfAuthorName = createNode("div");
    containerOfAuthorName.classList.add("user", "d-flex", "flex-row", "align-items-center");
    append(parent, containerOfAuthorName);
    return containerOfAuthorName;
}

function addAuthorName(comment, parent){
    let authorNameDiv = createNode("small");
    authorNameDiv.classList.add("font-weight-bold", "text-primary");
    authorNameDiv.innerHTML = `${comment.authorName}`;
    append(parent, authorNameDiv);
}

function addCreationDate(comment, parent){
    let creationDateDiv = createNode("small");
    creationDateDiv.innerHTML = `${comment.creationDate}`;
    append(parent, creationDateDiv);
}

function addContent(comment, parent){
    let content = createNode("small");
    content.innerHTML = `${comment.content}`;
    append(parent, content);
}

function createButtonsDiv(parent){
    let buttonsDiv = createNode("div");
    buttonsDiv.classList.add("action", "d-flex", "mt-2", "align-items-center");
    append(parent, buttonsDiv);
    return buttonsDiv;
}

function addButtons(parent, id){
        let button = createNode("button");
        button.classList.add("btn", "btn-primary", "me-2");
        button.type = "button";
        button.id = `${id}`;
        append(parent, button);
        return button;
}

function addIcons(parent, iconType){
    let icon = createNode("i");
    icon.classList.add("fas", `${iconType}`);
    append(parent, icon);
}

function createCommentTitleDiv(parent){
    let commentTitleDiv = createNode("div");
    commentTitleDiv.classList.add("headings", "d-flex", "justify-content-between", "align-items-center", "mb-3");
    append(parent, commentTitleDiv);
    return commentTitleDiv;
}

function addHowManyComments(parent, howManyComments){
    let label = createNode("h5");
    label.innerHTML = "Kommentek("+ `${howManyComments}` +")"
    append(parent, label);
}

function createComments(comment, howManyComments){
        const comments = document.getElementById("comments");
        let container = createCommentsContainer(comments);
        let divOfOneComment = createDivOfOneComment(container);
        let creationDateAndCommentAuthorDiv = createCreationDateAndCommentAuthorDiv(divOfOneComment);
        let containerOfAuthorName = createContainerOfAuthorName(creationDateAndCommentAuthorDiv);
        addAuthorName(comment, containerOfAuthorName);
        addCreationDate(comment, creationDateAndCommentAuthorDiv);
        addContent(comment, divOfOneComment);
        buttonsDiv = createButtonsDiv(divOfOneComment);
        let deleteButton = addButtons(buttonsDiv, "delete");
        let updateButton = addButtons(buttonsDiv, "update");
        addIcons(deleteButton, "fa-trash-alt");
        addIcons(updateButton, "fa-edit");
}

function createCommentTitle(howManyComments, whichComment) {
    if(whichComment == 0 && howManyComments > 0){
        const divOfCommentTitle = document.getElementById("divOfCommentTitle")
        //let commentTitleDiv = createCommentTitleDiv(divOfCommentTitle);
        addHowManyComments(divOfCommentTitle, howManyComments);
    }
}