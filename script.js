console.log("Website SMK Ketintang siap digunakan!");
function tampilkan(id) {
  const sections = document.querySelectorAll(".konten");
  sections.forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

// Tampilkan beranda saat pertama kali
document.addEventListener("DOMContentLoaded", () => {
  tampilkan("beranda");
});
