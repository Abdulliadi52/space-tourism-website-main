const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "/assets/technology/image-spaceport-portrait.jpg",
      landscape: "/assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "/assets/technology/image-space-capsule-portrait.jpg",
      landscape: "/assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const menu = document.getElementById("menu");
const openMenu = document.getElementById("burger");
const closeMenu = document.getElementById("close");

const img = document.getElementById("image");
const names = document.getElementById("name");
const info = document.getElementById("info");

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

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
  currenTarget();
});

window.addEventListener("resize", function () {
  currenTarget();
});

function currenTarget() {
  const present = technology[i];
  names.textContent = present.name;
  info.textContent = present.description;
  // img.src = present.images.portrait;

  if (window.innerWidth < 760) {
    img.src = present.images.landscape;
  } else {
    img.src = present.images.portrait;
  }
}
number1.addEventListener("click", function () {
  i = 0;
  currenTarget();
});

number2.addEventListener("click", function () {
  i = 1;
  currenTarget();
});

number3.addEventListener("click", function () {
  i = 2;
  currenTarget();
});

const select = document.getElementById("select");
const btns = select.querySelectorAll(".number");
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

number1.classList.add("colored");
