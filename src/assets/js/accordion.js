"use strict";

const accordionEl = document.querySelector(".accordion");

accordionEl.addEventListener("click", handleClick);

function handleClick(e) {
  const currentItem = e.target;
  const allItems = document.querySelectorAll(".accordion__item");

  if (
    currentItem.matches(".accordion__item") ||
    currentItem.matches(".accordion__label")
  ) {
    allItems.forEach((item) => {
      if (item.classList.contains("active")) {
        currentItem.closest(".accordion__item").classList.toggle("active");
        item.classList.remove("active");
      } else {
        currentItem.closest(".accordion__item").classList.toggle("active");
      }
    });
  }
}
