function createCommentOnClickListener(){
    document.getElementById("create").onclick = function() {
        sendHTTPCreateRequest();
    }
}

var createCommentRequest = {
    securityCode: 'code',
    authorName: 'authorname',
    content: 'content'
};

const createMethod = {
   method: 'POST',
   headers: {
       'Content-type': 'application/json; charset=UTF-8'
   },
   body: JSON.stringify(createCommentRequest)
}

function sendHTTPCreateRequest() {
    var articleId = sessionStorage.getItem("articleId");
    var url = "http://localhost:8080/blogi/api/articles/" + articleId + "/comments/";
    populateCreateCommentRequest();
    createMethod.body = JSON.stringify(createCommentRequest);
    fetch(url, createMethod)
    .then(response => {
        if (response.status == 201) {
            partialReload();
            resetCreateCommentFormData();
        } else if(response.status == 400) {
            alert("Valamelyik mezőt rosszul töltötted ki!\nA név nem lehet üres, a tartalom és a security-code-nak legalább két karakter kell legyen!");
        }
    })
    .catch(err => console.log(err))
}

function resetCreateCommentFormData() {
    document.getElementById('form-author-name').value = '';
    document.getElementById('form-content').value = '';
    document.getElementById('form-security-code').value = '';
}

function populateCreateCommentRequest() {
    var typedContent = document.getElementById('form-content').value;
    var typedAuthorName = document.getElementById('form-author-name').value;
    var typedSecurityCode = document.getElementById('form-security-code').value;

    createCommentRequest.securityCode = typedSecurityCode;
    createCommentRequest.authorName = typedAuthorName;
    createCommentRequest.content = typedContent;
}

createCommentOnClickListener();