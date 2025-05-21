// Recuperamos el ID del planeta que está en la URL
const urlParams = new URLSearchParams(window.location.search)
const planetID = urlParams.get("id");
const planetDetailsCont = $("#planetDetailsCont");

fetch("https://rickandmortyapi.com/api/location/" + planetID)
.then(function(response)
{
    return response.json();
})
.then(function(result)
{
    console.log(result);
    let planetData = result;
    let planetHTML =
    `
        <h2>${planetData.name}</h2>
        <p>Type: ${planetData.type}</p>
        <p>Dimension: ${planetData.dimension}</p>
    `;
    planetDetailsCont.html(planetHTML);
    let planetResidents = planetData.residents;
    planetResidents.forEach(function(resident) 
    {
        fetch(resident)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(result)
        {
            console.log(result);
            let characterData = result;
            fetch(characterData.episode[0])
            .then(function(response)
            {
                return response.json();
            })
            .then(function(result)
            {
                console.log(result);
                let chapterData = result;   
                let characterHTML =
                `
                    <article class = "col d-flex justify-content-center">
                        <div class = "card w-100 h-100 shadow p-2">
                            <img src = ${characterData.image} alt = ${characterData.name} class = "card-img-top user-img p-2">
                            <div class = "card-body text-center">
                                <div class = "section">
                                    <a href = ${characterData.url} rel = "noopener noreferrer" target = "_blank" class="d-block">
                                        <h5>${characterData.name}</h5>
                                    </a>
                                    <span class = "d-block">
                                        <span class = "status_icon"></span> ${characterData.species} - ${characterData.type}
                                    </span>
                                </div>
                                <div class = "section">
                                    <span class = "text-gray">Origin location: </span>
                                    <a href = ${characterData.origin.url} rel = "noopener noreferrer" target = "_blank" class = "d-block">${characterData.origin.name}</a>
                                </div>
                                <div class = "section">
                                    <span class = "text-gray">First seen in: </span>
                                    <a href = ${chapterData.url} rel = "noopener noreferrer" target = "_blank" class = "d-block">${chapterData.name}</a>
                                </div>
                            </div>
                        </div>
                    </article>
                `;
                $("#characterDetailsCont").append(characterHTML);
            })
            .then(function()
            {
                $("#spinnerUserList").hide();
            })
            .catch(function(err)
            {
                console.log(err);
            })   
        })
        .catch(function(err)
        {
            console.log(err);
        })
    });
})
.catch(function(err)
{
    console.log(err);
 })