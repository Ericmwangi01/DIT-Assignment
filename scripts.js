function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("click", function() {
            alert("You clicked on an image!");
        });
    });
});
