var clickedId = sessionStorage.getItem("clickedId");

function updateCommentOnClickListener(clickedId){
    document.getElementById("update").onclick = function() {
        sendHTTPUpdateRequest(clickedId);
    }
}

var updateCommentRequest = {
    securityCode: 'code',
    authorName: 'authorname',
    content: 'content'
};

const updateMethod = {
   method: 'PUT',
   headers: {
       'Content-type': 'application/json; charset=UTF-8'
   },
   body: JSON.stringify(updateCommentRequest)
}

function sendHTTPUpdateRequest(clickedId) {
    var articleId = sessionStorage.getItem("articleId");
    var clickedIdVar = sessionStorage.getItem("clickedId");
    var commentIndex = clickedIdVar.replace("update", "comment");
    var commentId = sessionStorage.getItem(commentIndex);
    var url = "http://localhost:8080/blogi/api/articles/" + articleId + "/comments/" + commentId;
    populateUpdateCommentRequest();
    updateMethod.body = JSON.stringify(updateCommentRequest);
    fetch(url, updateMethod)
    .then(response => {
        if (response.status == 204) {
            partialReload();
            resetUpdateCommentFormData();
        }
        else if(response.status == 403){
            alert("Hibás security code!");
        }else if(response.status == 400){
            alert("Valamelyik mezőt rosszul töltötted ki!\nA név nem lehet üres, a tartalom és a security-code-nak legalább két karakter kell legyen!");
        }
    })
    .catch(err => console.log(err))
}

function resetUpdateCommentFormData() {
    document.getElementById('security-code-update').value = '';
    document.getElementById('comment-name').value = '';
    document.getElementById('comment-content').value = '';
}

function populateUpdateCommentRequest() {
    var typedSecurityCode = document.getElementById("security-code-update").value;
    var typedContent = document.getElementById("comment-content").value;
    var typedAuthorName = document.getElementById("comment-name").value;
    updateCommentRequest.securityCode = typedSecurityCode;
    updateCommentRequest.authorName = typedAuthorName;
    updateCommentRequest.content = typedContent;
}

updateCommentOnClickListener(clickedId);