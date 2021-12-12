var clickedId = sessionStorage.getItem("clickedId");

function useModalDeleteButton(clickedId){
document.getElementById("delete").onclick = function() {
     sendHTTPDeleteRequest(clickedId);
    }
}

var deleteCommentRequest = {
    securityCode: 'code'
};

const deleteMethod = {
   method: 'DELETE',
   headers: {
      'Content-type': 'application/json; charset=UTF-8'
   },
   body: JSON.stringify(deleteCommentRequest)
}

function sendHTTPDeleteRequest(clickedId) {
    var typedSecurityCode = document.getElementById("security-code-delete").value;
    var articleId = sessionStorage.getItem("articleId");
    var clickedIdVar = sessionStorage.getItem("clickedId");
    var commentIndex = clickedIdVar.replace("delete", "comment");
    var commentId = sessionStorage.getItem(commentIndex);
    var url = "http://localhost:8080/blogi/api/articles/" + articleId + "/comments/" + commentId;
    deleteCommentRequest.securityCode = typedSecurityCode;
    deleteMethod.body = JSON.stringify(deleteCommentRequest);
    fetch(url, deleteMethod)
    .then(response => {
        if (response.status == 204) {
            partialReload();
        }
        else if(response.status == 403){
            alert("Hibás security code!");
        }
    })
    .catch(err => console.log(err))
}

useModalDeleteButton(clickedId);