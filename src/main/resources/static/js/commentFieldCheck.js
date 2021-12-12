function contentCheck(id){
    typedContent = document.getElementById(id).value;
    var regex = new RegExp('.{1,}[^"?:[^`!@#$%^&*\\-_=+\'/.,\" \"]]*');
    if(typedContent.exec(RegExp) != null){
        insert = document.getElementById("contentNotMach");
        insert.innerHTML = "Legalább két karaktert kell beírj white-space-eket nem számítva";
    }
}