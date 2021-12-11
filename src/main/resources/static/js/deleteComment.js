var clickedId = sessionStorage.getItem("clickedId");

function useModalDeleteButton(clickedId){
document.getElementById("delete").onclick = function() {
     sendHTTPDeleteRequest(clickedId);
     document.getElementById('security-code-delete').innerHTML = '';
    }
}

var deleteCommentRequest = {
    securityCode: 'code'
};

const deleteMethod = {
 method: 'DELETE', // Method itself
 headers: {
  'Content-type': 'application/json; charset=UTF-8' // Indicates the content
 },
 body: JSON.stringify(deleteCommentRequest) // We send data in JSON format
}

function sendHTTPDeleteRequest(clickedId) {
    var typedSecurityCode = document.getElementById("security-code-delete").value;
    var articleId = sessionStorage.getItem("articleId");
    console.log("ArticleId: "+ articleId);
    var clickedIdVar = sessionStorage.getItem("clickedId");
    var commentIndex = clickedIdVar.replace("delete", "comment");
    console.log("comment index: "+commentIndex);
    var commentId = sessionStorage.getItem(commentIndex);
    console.log("comment id: "+commentId);
    var url = "http://localhost:8080/blogi/api/articles/" + articleId + "/comments/" + commentId;
    deleteCommentRequest.securityCode = typedSecurityCode;
    deleteMethod.body = JSON.stringify(deleteCommentRequest);
    // make the HTTP put request using fetch api
    fetch(url, deleteMethod)
    .then(response => {
        if (response.status == 204) {
            document.getElementById('comments').innerHTML = '';
            document.getElementById('divOfCommentTitle').innerHTML = '';
            loadCommentsData();
        }
        else if(response.status == 403){
            alert("Hibás security code!");
            document.getElementById('security-code-delete').innerHTML = '';
        }
    })
    .catch(err => console.log(err))
}

useModalDeleteButton(clickedId);