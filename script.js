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

function goToCart(product) {
  // Redirect to cart.html dengan membawa data produk yang dipilih
  window.location.href = `cart.html?product=${product}`;
}

document.addEventListener("DOMContentLoaded", function () {
  // Ambil parameter produk dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get("product");

  // Tambahkan pesan ke dalam cart-content
  const cartContent = document.getElementById("cart-content");
  cartContent.innerHTML = `<p>${product}</p>`;
});
