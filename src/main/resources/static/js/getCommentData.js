function loadCommentsData() {
    var id = localStorage.getItem("id");
    const url = 'http://localhost:8080/blogi/api/articles/' + id + '/comments';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
    let comments = data.comments;
    let howManyComments = comments.length;
    let whichComment = 0;
    createCommentTitle(howManyComments, whichComment);
    return comments.map(function(comment) {
        createComments(comment, whichComment, howManyComments);
        whichComment += 1;
    })
    })
    .catch(function(error) {
        console.log(error);
    });
}

loadCommentsData();