document.addEventListener("DOMContentLoaded", function () {

  // Tombol scroll hero
  const btnScroll = document.getElementById("btnScroll");
  if (btnScroll) {
    btnScroll.addEventListener("click", function () {
      document.getElementById("about").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // Tombol kontak
  const btnKontak = document.getElementById("btnKontak");
  if (btnKontak) {
    btnKontak.addEventListener("click", function () {
      alert("Silakan hubungi saya melalui email!");
    });
  }

  // Animasi saat scroll
  const fades = document.querySelectorAll(".fade");

  function cekAnimasi() {
    fades.forEach(el => {
      const posisi = el.getBoundingClientRect().top;
      if (posisi < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", cekAnimasi);
  cekAnimasi(); // tampilkan saat load
});