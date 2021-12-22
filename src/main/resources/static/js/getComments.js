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
    buttonsDiv.id = "buttons-div";
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

function addModalToButton(id, dataBsTarget) {
    document.getElementById(id).setAttribute("data-bs-toggle", "modal");
    document.getElementById(id).setAttribute("data-bs-target", dataBsTarget);
}

function addIdOfDeleteButtonToSessionStorage(clickedId) {
    document.getElementById(clickedId).onclick = function() {
        sessionStorage.setItem("clickedId", clickedId);
    }
}

function addIdOfUpdateButtonToSessionStorage(clickedId, comment){
    document.getElementById(clickedId).onclick = function() {
        sessionStorage.setItem("clickedId", clickedId);
    }
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
    label.innerHTML = "Kommentek("+ `${howManyComments}` +")";
    append(parent, label);
}

function createDeleteButton(parent, deleteButtonId){
    let deleteButton = addButtons(parent, deleteButtonId);
    addIcons(deleteButton, "fa-trash-alt");
    addModalToButton(deleteButtonId, "#deleteModal");
    addIdOfDeleteButtonToSessionStorage(deleteButtonId);
}

function createUpdateButton(parent, updateButtonId, deleteButtonId, comment){
    let updateButton = addButtons(parent, updateButtonId);
    addIcons(updateButton, "fa-edit");
    addModalToButton(updateButtonId, "#updateModal");
    addIdOfUpdateButtonToSessionStorage(updateButtonId, comment);
}

function createComments(comment, whichComment, howManyComments){
    const comments = document.getElementById("comments");
    let container = createCommentsContainer(comments);
    let divOfOneComment = createDivOfOneComment(container);
    let creationDateAndCommentAuthorDiv = createCreationDateAndCommentAuthorDiv(divOfOneComment);
    let containerOfAuthorName = createContainerOfAuthorName(creationDateAndCommentAuthorDiv);
    addAuthorName(comment, containerOfAuthorName);
    addCreationDate(comment, creationDateAndCommentAuthorDiv);
    addContent(comment, divOfOneComment);
    buttonsDiv = createButtonsDiv(divOfOneComment);
    let deleteButtonId = "delete" + whichComment;
    createDeleteButton(buttonsDiv, deleteButtonId);
    let updateButtonId = "update" + whichComment;
    createUpdateButton(buttonsDiv, updateButtonId, deleteButtonId, comment);
}

function createCommentTitle(howManyComments, whichComment) {
    if(whichComment == 0 && howManyComments > 0){
        const divOfCommentTitle = document.getElementById("divOfCommentTitle");
        addHowManyComments(divOfCommentTitle, howManyComments);
    }
}
