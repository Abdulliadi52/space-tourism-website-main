const menu = document.getElementById("menu");
const openMenu = document.getElementById("burger");
const closeMenu = document.getElementById("close");

openMenu.addEventListener("click", function () {
  menu.classList.add("active");
  document.body.classList.add("static");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("active");
  document.body.classList.remove("static");
});

// const btns = menu.querySelectorAll("#link");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     btns.forEach(function (present) {
//       if (present !== btn) {
//         present.classList.remove("stay");
//       }
//     });
//     menu.classList.add("stay");
//   });
// });
