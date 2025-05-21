document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("info-form");
  const alertBox = document.getElementById("form-alert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const age = document.getElementById("age");

    if (!email.value || !name.value || !surname.value || !age.value) {
      alertBox.classList.remove("d-none");
      alertBox.classList.remove("alert-success");
      alertBox.classList.add("alert-danger");
      alertBox.innerText = "¡Morty, completa todos los campos o el universo colapsará!";
      alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        alertBox.classList.add("d-none");
      }, 5000);
      return;
    }

    alertBox.classList.remove("d-none");
    alertBox.classList.remove("alert-danger");
    alertBox.classList.add("alert-success");
    alertBox.innerText = "¡Gracias por unirte a la demo de Rick y Morty!";
    alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
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
  const navLinks = document.querySelectorAll(".nav-link");
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      navLinks.forEach(link => link.classList.remove('active'));
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        const offset = 70;
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
