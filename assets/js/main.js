// Show Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Highlight Active Links
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Only make selected link active*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*After select link, close the toggle menu*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//' Show dynamic date to footer
const currDateYr = new Date().getFullYear();
document.getElementById("currYr").innerHTML = currDateYr;

// Scroll Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });
