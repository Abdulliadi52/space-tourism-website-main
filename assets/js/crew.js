const crews = [
  {
    name: "Douglas Hurley",

    png: "/assets/crew/image-douglas-hurley.png",

    role: "Commander",

    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",

    png: "/assets/crew/image-mark-shuttleworth.png",

    role: "Mission Specialist",

    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",

    png: "/assets/crew/image-victor-glover.png",

    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",

    png: "/assets/crew/image-anousheh-ansari.png",

    role: "Flight Engineer",

    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const menu = document.getElementById("menu");
const openMenu = document.getElementById("burger");
const closeMenu = document.getElementById("close");

const role = document.getElementById("role");
const names = document.getElementById("name");
const info = document.getElementById("info");
const img = document.getElementById("image");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
btn1.classList.add("colored");
openMenu.addEventListener("click", function () {
  menu.classList.add("active");
  document.body.classList.add("static");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("active");
  document.body.classList.remove("static");
});

let i = 0;

window.addEventListener("DOMContentLoaded", function () {
  currentTarget();
});

function currentTarget() {
  const present = crews[i];
  role.textContent = present.role;
  names.textContent = present.name;
  info.textContent = present.bio;
  img.src = present.png;
}

btn1.addEventListener("click", function () {
  i = 0;
  currentTarget();
});

btn2.addEventListener("click", function () {
  i = 1;
  currentTarget();
});

btn3.addEventListener("click", function () {
  i = 2;
  currentTarget();
});

btn4.addEventListener("click", function () {
  i = 3;
  // img.width = "500px";
  // image.style.width = "90%";
  currentTarget();
});

const select = document.getElementById("btns");
const btns = select.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btns.forEach(function (present) {
      if (present !== btn) {
        present.classList.remove("colored");
      }
    });
    btn.classList.add("colored");
  });
});
