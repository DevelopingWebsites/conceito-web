window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  const sections = [home, services, showServices, about, contact];
  sections.forEach((section) => activateMenuAtCurrentSection(section));
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (sectionId === "home") showNumbersInStats(sectionBoundaries);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  const isScroll = scrollY > 0;
  const nav = document.querySelector("#navigation");
  nav.classList.toggle("scroll", isScroll);
  // navigation.classList.toggle("scroll", isScroll);
}

function showBackToTopButtonOnScroll() {
  const isScroll = scrollY > 0;
  backToTopButton.classList.toggle("show", isScroll);
  // console.log(backToTopButton);
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

function showNumbersInStats(sectionBoundaries) {
  const stats = document.querySelector(".stats");
  stats.classList.toggle("show", sectionBoundaries);
}

// create scroll revel event
const scrollReveal = new ScrollReveal();
scrollReveal.reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #showServices,
  #about,
  #about header, 
  #about .content`);
