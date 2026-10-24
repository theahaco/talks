// Shared reveal.js setup for every deck file: the brand footer on light slides, then init.
document.querySelectorAll(".reveal .slides > section").forEach((slide, i) => {
  if (slide.classList.contains("navy")) return;
  slide.insertAdjacentHTML(
    "beforeend",
    `<footer class="slide-footer"><img src="assets/aha-logomark_blue.svg" alt="">` +
      `<span>© 2026 The Aha Company</span><span class="page">${i + 1}</span></footer>`,
  );
});

Reveal.initialize({
  hash: true,
  transition: "fade",
  center: false,
  width: 1920,
  height: 1080,
  margin: 0,
  plugins: [RevealHighlight, RevealNotes],
});
