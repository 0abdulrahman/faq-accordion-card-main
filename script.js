const lisArrows = document.querySelectorAll(
  "main section article ul li .heading img"
);
const lis = document.querySelectorAll("main section article ul li");

const lisheadings = document.querySelectorAll(
  "main section article ul li .heading h3"
);

lisArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    lis.forEach((li) => {
      if (li === e.target.parentElement.parentElement) {
        return;
      } else {
        li.classList.remove("active");
      }
    });
    arrow.parentElement.parentElement.classList.toggle("active");
  });
});

lisheadings.forEach((heading) => {
  heading.addEventListener("click", (e) => {
    lis.forEach((li) => {
      if (li === e.target.parentElement.parentElement) {
        return;
      } else {
        li.classList.remove("active");
      }
    });
    heading.parentElement.parentElement.classList.toggle("active");
  });
});
