document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("info-form");
  const alertBox = document.getElementById("form-alert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertBox.classList.remove("d-none");
    form.reset();
    setTimeout(() => {
      alertBox.classList.add("d-none");
    }, 5000);
  });

  // Interacción con pines
  $(".pin").mouseenter(function () {
    let country = $(this).data("country");
    $(".Pin" + country + ".fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite");
    $(".Foto" + country + " img").css("opacity", "100%");
    $(".Texto" + country).css("opacity", "100%");
    $(".caja-foto" + country).css("opacity", "100");
  });

  $(".pin").mouseleave(function () {
    let country = $(this).data("country");
    $(".Pin" + country + ".fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0");
    $(".Foto" + country + " img").css("opacity", "0%");
    $(".Texto" + country).css("opacity", "0%");
  });

  // Scroll suave
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        const offset = 70; // altura de la navbar
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  // Scrollspy personalizado
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});