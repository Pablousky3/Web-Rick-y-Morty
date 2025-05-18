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
    let planetData = result.data;
    let detailsHTML =
    `
        <h2>${planetData.name}</h2>
        <p>Tipo: ${planetData.type}</p>
        <p>Dimensión: ${gplanetData.dimension}</p>
    `;
    planetDetailsCont.html(detailsHTML);
})
.catch(function(err)
{
    console.log(err);
 })