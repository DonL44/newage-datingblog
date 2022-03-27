var createPostBtn = document.getElementById('create-new-post');
var submitPostBtn = document.getElementById('post-button');
const postClone = document.getElementById('posts');

createPostBtn.onclick = function() {
    document.getElementById('new-post').style.display = "block";
    document.getElementById('new-post-section').style.height = "200px";
    document.getElementById('create-new-post').style.display = "none";
}

submitPostBtn.onclick = function(event) {
    event.preventDefault();
    submitNewPost();
}

function submitNewPost() {
    var clone = postClone.cloneNode(true);
    clone.classList.add = 'post';
    document.body.appendChild(clone);
    var dt = new Date();
    document.getElementById('dateTime').innerHTML=dt;
}