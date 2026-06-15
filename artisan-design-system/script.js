const searchInput = document.querySelector(".search input");
const navLinks = document.querySelectorAll(".nav a");

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    const keyword = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".foundation-card, .metric");

    cards.forEach((card) => {
      const isMatch = !keyword || card.textContent.toLowerCase().includes(keyword);
      card.classList.toggle("is-muted", !isMatch);
    });
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
