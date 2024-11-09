// script.js
function enlargeImage(imgId) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("enlargedImage");
    modal.style.display = "block";
    modalImg.src = document.getElementById(imgId).src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
