function sync() {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      sessionStorage.setItem(key, value);
      localStorage.clear();
    }
}

function storeCommentIds(idMap) {
    idMap.forEach (function(value, key) {
        sessionStorage.setItem(key, value);
    })
}