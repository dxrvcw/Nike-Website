let scrollLine = document.querySelector(".scroll-line");

window.addEventListener("scroll", () => {
  let scrollWidth =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollLine.style.width = scrollWidth + "%";
});
