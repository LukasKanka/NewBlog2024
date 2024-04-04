//Navbar menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// Dark / Light Mode

const body = document.querySelector("body");
const head = document.querySelector("header");
const links = document.querySelectorAll("a");
const nav = document.querySelector(".navigation");
const h1 = document.querySelector("h1");
const nadpish2 = document.querySelectorAll("h2");
const p = document.querySelector("p");
const solid = document.querySelector(".fa-solid");
const solid1 = document.querySelector(".menu-icon");
const footer = document.querySelector("footer");
const gotop = document.querySelector("#scrollToTopBtn");
const theme = document.querySelector("#toggleButton");
const box = document.querySelectorAll(".code-box");
let isDraculaMode = false;

// Funkce pro nastavení stylů pro Dracula mód
function setDraculaStyles() {
  body.style.backgroundColor = "#2a232b";
  body.style.color = "#f8f8f2";
  head.style.backgroundColor = "#2a232b";
  theme.style.color = "#9fea8a";
  gotop.style.color = "#9fea8a";
  links.forEach((a) => {
    a.style.color = "#f76b00";
  });
  nav.style.backgroundColor = "#2a232b";
  h1.style.color = "#e54472";
  nadpish2.forEach((h2) => {
    h2.style.color = "#18f700";
  });
  solid.style.backgroundColor = "#2a232b";
  solid.style.color = "#f76b00";
  solid1.style.backgroundColor = "#2a232b";
  footer.style.backgroundColor = "#2a232b";
  //gotop.style.backgroundColor = "#18f700";
  //theme.style.backgroundColor = "#18f700";
}

// Funkce pro nastavení stylů pro Light mód;
function setKakouneStyles() {
  body.style.backgroundColor = "#9fea8a";
  body.style.color = "#282a36";
  h1.style.color = "#e84046";
  theme.style.color = "#2a232b";
  links.forEach((a) => {
    a.style.color = "#ea3838";
  });
  gotop.style.color = "#2a232b";
  head.style.backgroundColor = "#9fea8a";
  nav.style.backgroundColor = "#9fea8a";
  solid.style.backgroundColor = "#9fea8a";
  solid1.style.backgroundColor = "#9fea8a";
  footer.style.backgroundColor = "#9fea8a";
  nadpish2.forEach((h2) => {
    h2.style.color = "#1909f4";
  });
  //gotop.style.backgroundColor = "#a7e6ef";
  //theme.style.backgroundColor = "#a7e6ef";
  box.forEach((p) => {
    p.style.color = "white";
  });
}

// Funkce pro přepnutí módu
function toggleMode() {
  if (isDraculaMode) {
    // Pokud je momentálně v Dracula modu, přepnout na Light mód
    setKakouneStyles();
    isDraculaMode = false;
  } else {
    // Pokud je momentálně v Light modu, přepnout na Dracula mód
    setDraculaStyles();
    isDraculaMode = true;
  }
}

// Funkce na změnu stylů
document.getElementById("toggleButton").addEventListener("click", toggleMode);

// Nastavení - výchozí styl na Dark
setKakouneStyles();
isDraculaMode = true;

// Photo Gallery -> section (zoom)
const image1 = document.querySelector(".picture");

image1.addEventListener("mouseenter", () => {
  image1.style.transform = "scale(2.2)";
});

image1.addEventListener("mouseleave", () => {
  image1.style.transform = "scale(1)";
});

const image2 = document.querySelector(".picture1");

image2.addEventListener("mouseenter", () => {
  image2.style.transform = "scale(2.2)";
});

image2.addEventListener("mouseleave", () => {
  image2.style.transform = "scale(1)";
});

const image3 = document.querySelector(".picture2");

image3.addEventListener("mouseenter", () => {
  image3.style.transform = "scale(2.2)";
});

image3.addEventListener("mouseleave", () => {
  image3.style.transform = "scale(1)";
});

// Tlačítko go to top
// Zobrazení tlačítka od rolovaní části stránky (víc logické než až na konci)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Posunout nahoru, když uživatel klikne na tlačítko
function scrollToTop() {
  document.body.scrollTop = 0; // Pro Safari
  document.documentElement.scrollTop = 0; // Pro ostatní prohlížeče
}
 
