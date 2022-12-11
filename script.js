const boxes = document.querySelectorAll(".box");
const img1s = document.querySelectorAll(".box .img1");
const img2s = document.querySelectorAll(".box .img2");

boxes.forEach((box) =>
  box.addEventListener("mouseover", () => {
    box.children[0].children[1].children[0].classList.add("hide");
    box.children[0].children[1].children[1].classList.remove("hide");
  })
);

boxes.forEach((box) =>
  box.addEventListener("mouseout", () => {
    box.children[0].children[1].children[0].classList.remove("hide");
    box.children[0].children[1].children[1].classList.add("hide");
  })
);

const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");

bar.addEventListener("click", function () {
  menu.classList.toggle("showmenu");
});
