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

function createDivOfCommentTitle(parent){
    let divOfCommentTitle = createNode("div");
    divOfCommentTitle.classList.add("comment-title");
    divOfCommentTitle.id = "comment-title";
    append(parent, divOfCommentTitle);
}

function createDivOfOneComment(parent){
    let divOfOneComment = createNode("div");
    divOfOneComment.classList.add("card", "p-3", "my-2");
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
    if(id == "delete"){
        let deleteButton = createNode("button");
        deleteButton.classList.add("btn", "btn-primary", "me-2");
        deleteButton.type = "button";
        deleteButton.id = "delete";
        append(parent, deleteButton);
        return deleteButton;
    }else if(id == "update"){
        let updateButton = createNode("button");
        updateButton.classList.add("btn", "btn-primary");
        updateButton.type = "button";
        updateButton.id = "update";
        append(parent, updateButton);
        return updateButton;
    }
}

function addDeleteIcon(parent){
    let deleteIcon = createNode("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");
    append(parent, deleteIcon);
}

function addUpdateIcon(parent){
    let updateIcon = createNode("i");
    updateIcon.classList.add("fas", "fa-edit");
    append(parent, updateIcon);
}

function createCommentTitleDiv(parent){
    let commentTitleDiv = createNode("div");
    commentTitleDiv.classList.add("headings", "d-flex", "justify-content-between", "align-items-center", "mb-3");
    append(parent, commentTitleDiv);
    return commentTitleDiv;
}

function printHowManyComments(parent, howManyComments){
    let label = createNode("h5");
    label.innerHTML = "Kommentek("+ `${howManyComments}` +")"
    append(parent, label);
}

function createComments(comment, index){
    if(index == 0){
        const comments = document.getElementById("comments");
        let container = createCommentsContainer(comments);
        createDivOfCommentTitle(container);
        let divOfOneComment = createDivOfOneComment(container);
        let creationDateAndCommentAuthorDiv = createCreationDateAndCommentAuthorDiv(divOfOneComment);
        let containerOfAuthorName = createContainerOfAuthorName(creationDateAndCommentAuthorDiv);
        addAuthorName(comment, containerOfAuthorName);
        addCreationDate(comment, creationDateAndCommentAuthorDiv);
        addContent(comment, divOfOneComment);
        buttonsDiv = createButtonsDiv(divOfOneComment);
        let deleteButton = addButtons(buttonsDiv, "delete");
        let updateButton = addButtons(buttonsDiv, "update");
        addDeleteIcon(deleteButton);
        addUpdateIcon(updateButton);
    }
    else{
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
         addDeleteIcon(deleteButton);
         addUpdateIcon(updateButton);
    }
}

function createCommentTitle(howManyComments) {
    let commentTitle = document.getElementById("comment-title");
    let commentTitleDiv = createCommentTitleDiv(commentTitle);
    printHowManyComments(commentTitleDiv, howManyComments);
}