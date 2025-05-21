// Mostrar animación de cierre del portal al cargar
window.addEventListener("load", () => {
  const loader = document.getElementById("portal-loader");
  if (sessionStorage.getItem("portalTransition") === "true" && loader) {
    loader.classList.add("portal-open");
    setTimeout(() => {
      loader.classList.remove("portal-open");
      loader.classList.add("portal-close");
      sessionStorage.removeItem("portalTransition");
    }, 100);
  }
});

// Recuperamos el ID del planeta que está en la URL
const urlParams = new URLSearchParams(window.location.search);
const planetID = urlParams.get("id");
const planetDetailsCont = $("#planetDetailsCont");

fetch("https://rickandmortyapi.com/api/location/" + planetID)
  .then(response => response.json())
  .then(planetData => {
    planetDetailsCont.html(`
      <h2>${planetData.name}</h2>
      <p>Type: ${planetData.type}</p>
      <p>Dimension: ${planetData.dimension}</p>
    `);

    planetData.residents.forEach(resident => {
      fetch(resident)
        .then(response => response.json())
        .then(characterData => {
          fetch(characterData.episode[0])
            .then(response => response.json())
            .then(chapterData => {
              const characterHTML = `
                <article class="col d-flex justify-content-center">
                  <div class="card w-100 h-100 shadow p-2">
                    <img src="${characterData.image}" alt="${characterData.name}" class="card-img-top user-img p-2">
                    <div class="card-body text-center">
                      <div class="section">
                        <a href="${characterData.url}" target="_blank" class="d-block">
                          <h5>${characterData.name}</h5>
                        </a>
                        <span class="d-block">
                          <span class="status_icon"></span> ${characterData.species} - ${characterData.type}
                        </span>
                      </div>
                      <div class="section">
                        <span class="text-gray">Origin location: </span>
                        <a href="${characterData.origin.url}" target="_blank" class="d-block">${characterData.origin.name}</a>
                      </div>
                      <div class="section">
                        <span class="text-gray">First seen in: </span>
                        <a href="${chapterData.url}" target="_blank" class="d-block">${chapterData.name}</a>
                      </div>
                    </div>
                  </div>
                </article>
              `;
              $("#characterDetailsCont").append(characterHTML);
            })
            .then(() => {
              $("#spinnerUserList").hide();
            });
        });
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
  })
  .catch(function (err) {
    console.log(err);
  });
