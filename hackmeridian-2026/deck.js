// Shared reveal.js setup for every deck file: a slide number on light slides, then init.
document.querySelectorAll(".reveal .slides > section").forEach((slide, i) => {
  if (slide.classList.contains("navy")) return;
  slide.insertAdjacentHTML(
    "beforeend",
    `<footer class="slide-footer"><span class="page">${i + 1}</span></footer>`,
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
