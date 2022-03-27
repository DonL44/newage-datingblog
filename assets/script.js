var createPostBtn = document.getElementById('create-new-post');
var submitPostBtn = document.getElementById('post-button');
const postClone = document.getElementById('posts');
var timeStamp = Date.now();

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
}