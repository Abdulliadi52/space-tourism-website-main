const destination = [
  {
    name: "Moon",
    png: "/assets/destination/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    png: "/assets/destination/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    png: "/assets/destination/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    png: "/assets/destination/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const names = document.getElementById("name");
const info = document.getElementById("info");
const image = document.getElementById("image");
const distance = document.getElementById("dist");
const day = document.getElementById("day");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const menu = document.getElementById("menu");
const openMenu = document.getElementById("burger");
const closeMenu = document.getElementById("close");

let i = 0;
window.addEventListener("DOMContentLoaded", function () {
  currentTarget();
});

function currentTarget() {
  const present = destination[i];
  names.textContent = present.name;
  info.textContent = present.description;
  image.src = present.png;
  distance.textContent = present.distance;
  day.textContent = present.travel;
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
  currentTarget();
});

openMenu.addEventListener("click", function () {
  menu.classList.add("active");
  document.body.classList.add("static");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("active");
  document.body.classList.remove("static");
});

const selection = document.getElementById("select");
const btns = selection.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btns.forEach(function (present) {
      if (present !== btn) {
        present.classList.remove("stay");
      }
    });
    btn.classList.add("stay");
  });
});
