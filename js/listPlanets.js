$(document).ready(function () {
  const pins = [
    $(".PinCanada"),
    $(".PinEstadosUnidos"),
    $(".PinBrasil"),
    $(".PinJapon"),
    $(".PinAustralia"),
    $(".PinChina"),
    $(".PinEspana"),
    $(".PinInglaterra"),
    $(".PinArgentina")
  ];

  fetch("https://rickandmortyapi.com/api/location/1,3,4,8,9,10,13,16,20")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      let planets = result;
      let counter = 0;
      planets.forEach(function (planet) {
        pins[counter].on("click", function () {
          const loader = document.getElementById("portal-loader");
          if (loader) {
            loader.classList.add("portal-open");
            sessionStorage.setItem("portalTransition", "true");
            requestAnimationFrame(() => {
              setTimeout(() => {
                window.location.href = `location.html?id=${planet.id}`;
              }, 1400); // tiempo extendido para suavidad
            });
          } else {
            window.location.href = `location.html?id=${planet.id}`;
          }
        });
        ++counter;
      });
    })
    .catch(function (err) {
      console.log(err);
    });

  // Efecto de partículas del cursor
  document.addEventListener("mousemove", function (e) {
    const particle = document.createElement("div");
    particle.className = "cursor-particle";
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    document.body.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 1000);
  });
});

