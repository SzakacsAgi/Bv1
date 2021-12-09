function loadCommentsData() {
    var id = localStorage.getItem("id");
    const url = 'http://localhost:8080/blogi/api/articles/' + id + '/comments';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
    let comments = data.comments;
    let howManyComments = comments.length;
    let index = 0;
     comments.map(function(comment) {
        createComments(comment, index);
        index += 1;
        console.log(index);
    })
    if(howManyComments > 0){
        createCommentTitle(howManyComments);
    }
    return;
    })
    .catch(function(error) {
        console.log(error);
    });
}

loadCommentsData();