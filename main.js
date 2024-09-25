const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(accordion => {
  accordion.addEventListener("click", event => {
    accordion.classList.toggle("active");

    const accordionContent = accordion.nextElementSibling;

    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});
