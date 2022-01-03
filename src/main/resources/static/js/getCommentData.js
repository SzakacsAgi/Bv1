function loadCommentsData() {
    var id = sessionStorage.getItem("articleId");
    const url = 'http://localhost:8080/blogi/api/articles/' + id + '/comments';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
    let comments = data.comments;
    let howManyComments = comments.length;
    let whichComment = 0;
    const commentIdMap = new Map();
    createCommentTitle(howManyComments, whichComment);
    comments.map(function(comment) {
        createComments(comment, whichComment, howManyComments);
        commentIdMap.set("comment" + whichComment, comment.id);
        whichComment += 1;
    })

    storeCommentIds(commentIdMap);

    return;
    })
    .catch(function(error) {
        console.log(error);
    });
}

loadCommentsData();