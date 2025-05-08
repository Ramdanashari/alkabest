  const images = [
    "assets/alka.jpg",
    "assets/e.jpg",
    "assets/f.jpg"
  ];

  let currentImage = 0;
  const slideshow = document.getElementById("slideshow");

  function changeImage() {
    slideshow.style.backgroundImage = `url(${images[currentImage]})`;
    currentImage = (currentImage + 1) % images.length;
  }

  changeImage(); // tampilkan pertama
  setInterval(changeImage, 5000); // ganti gambar setiap 3 detik
