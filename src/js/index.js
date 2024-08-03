const buttons = document.querySelectorAll(".btn");
const char = document.querySelectorAll(".char");

buttons.forEach((btn, indice) => {
  btn.addEventListener("click", () => {
    desselectbtn();
    desselectchar();

    btn.classList.add("selected");
    char[indice].classList.add("selected");
  });
});

function desselectchar() {
  const charselected = document.querySelector(".char.selected");

  charselected.classList.remove("selected");
}

function desselectbtn() {
  const btnselected = document.querySelector(".btn.selected");
  btnselected.classList.remove("selected");
}
