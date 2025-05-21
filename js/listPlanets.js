$(document).ready(function(){
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
    .then(function(response)
    {
        return response.json();
    })
    .then(function(result)
    {
        console.log(result);
        let planets = result;
        let counter = 0;

        planets.forEach(function(planet) 
        {
          let link = document.createElement('a');
          link.href = 'location.html?id=' + planet.id;
          pins[counter].append(link);
          ++counter;
        });
    })
    .catch(function(err)
    {
        console.log(err);
    })
});