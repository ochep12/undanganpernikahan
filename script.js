document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("open-btn");
  const cover = document.getElementById("cover");
  const mainContent = document.getElementById("main-content");
  const guestNameElement = document.getElementById("guest-name");

  // Mengambil parameter nama tamu dari URL (Contoh: index.html?to=Budi)
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("to");

  if (guestName) {
    guestNameElement.textContent = decodeURIComponent(guestName);
  } else {
    guestNameElement.textContent = "Tamu Undangan";
  }

  // Tombol Buka Undangan
  openBtn.addEventListener("click", function () {
    cover.style.opacity = "0";
    setTimeout(() => {
      cover.classList.add("hidden");
      mainContent.classList.remove("hidden");
      window.scrollTo(0, 0);
    }, 500);
  });

  // Generate QR Code berisi link halaman web ini
  const mapsUrl =
    "769H+6J8, Munting, Kecamatan Lembor, Kabupaten Manggarai Barat, Nusa Tenggara Timur";
  new QRCode(document.getElementById("qrcode"), {
    text: mapsUrl,
    width: 150,
    height: 150,
    colorDark: "#1a1a1a",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});
