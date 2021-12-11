function backFillCommentData(comment){
    textareaOfCommentName = document.getElementById("comment-name");
    textareaOfCommentName.innerHTML = `${comment.authorName}`;
    textareaOfContent = document.getElementById("comment-content");
    textareaOfContent.innerHTML = `${comment.content}`;
}