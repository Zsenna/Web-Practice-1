// document.addEventListener('DOMContentLoaded', function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const imageParam = urlParams.get('image');
//     const displayedImage = document.getElementById('displayed-image');

//     if (imageParam) {
//         displayedImage.setAttribute('src', imageParam);
//     }
// });

function showImage(imageName) {
  localStorage.setItem("selectedImage", imageName);
  window.location.href = "cart.html";
}

const selectedImageName = localStorage.getItem("selectedImage");
const selectedImage = document.getElementById("image");
if (selectedImageName) {
  selectedImage.src = selectedImageName;
}
