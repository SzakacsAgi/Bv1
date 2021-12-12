var clickedId = sessionStorage.getItem("clickedId");

function useModalUpdateButton(clickedId){
document.getElementById("update").onclick = function() {
     sendHTTPUpdateRequest(clickedId);
     document.getElementById('security-code-update').innerHTML = '';
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
    var typedSecurityCode = document.getElementById("security-code-update").value;
    var typedContent = document.getElementById("comment-content").value;
    var typedAuthorName = document.getElementById("comment-name").value;
    var articleId = sessionStorage.getItem("articleId");
    var clickedIdVar = sessionStorage.getItem("clickedId");
    var commentIndex = clickedIdVar.replace("update", "comment");
    var commentId = sessionStorage.getItem(commentIndex);
    var url = "http://localhost:8080/blogi/api/articles/" + articleId + "/comments/" + commentId;
    updateCommentRequest.securityCode = typedSecurityCode;
    updateCommentRequest.authorName = typedAuthorName;
    updateCommentRequest.content = typedContent;
    updateMethod.body = JSON.stringify(updateCommentRequest);
    fetch(url, updateMethod)
    .then(response => {
        if (response.status == 204) {
            partialReload();
        }
        else if(response.status == 403){
            alert("Hibás security code!");
            document.getElementById('security-code-update').innerHTML = '';
        }else if(response.status == 400){
            alert("Valamelyik mezőt rosszul töltötted ki!\nA név nem lehet üres, a tartalom és a security-code-nak legalább két karakter kell legyen!");
            document.getElementById('security-code-update').innerHTML = '';
            document.getElementById('comment-name').innerHTML = '';
            document.getElementById('comment-content').innerHTML = '';
        }
    })
    .catch(err => console.log(err))
}

useModalUpdateButton(clickedId);