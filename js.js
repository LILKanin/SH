/* Открыть, когда кто-то нажимает на элемент span */
function openNav(test) {
  document.getElementById("myNav").style.width = "50%";
  document.querySelector(".class1").innerHTML = `ЗДАРОВА егор`;
}

/* Закрыть, когда кто-то нажимает на символ "x" внутри наложения */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// window.addEventListener("load", () => {
//   let name = prompt(
//     "Как вас зовут",
//     ""
//   );
//   document.querySelector(".class1").innerHTML = `ЗДАРОВА ${name}`;
// });