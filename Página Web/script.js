document.addEventListener("DOMContentLoaded", function() {
    const infoForm = document.getElementById("infoForm");
    const generatedStory = document.querySelector("#generatedStory p");

    infoForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombresApellidos = document.getElementById("nombresApellidos").value;
        const apodo = document.getElementById("apodo").value;
        const colorCabello = document.getElementById("colorCabello").value;
        const colorOjos = document.getElementById("colorOjos").value;
        const edad = document.getElementById("edad").value;
        const hobby = document.getElementById("hobby").value;

        const story = `${nombresApellidos}, también conocido como ${apodo}, con cabello ${colorCabello} y ojos ${colorOjos}, decidió aprovechar su tiempo a los ${edad} años de edad practicando su hobby favorito: ${hobby}. Un día soleado, mientras disfrutaba de ${hobby}, notó algo inusual en el horizonte. Al acercarse, se dio cuenta de que era un misterioso mapa que prometía aventuras inimaginables. 

        Sin dudarlo, ${nombresApellidos} se embarcó en una emocionante búsqueda. Siguiendo el mapa, se aventuró en la selva, escaló montañas, cruzó desiertos y se encontró con personajes asombrosos. Cada desafío superado le brindaba nuevas habilidades y experiencias inolvidables. 

        En su camino, ${nombresApellidos} demostró valentía al rescatar a un grupo de exploradores atrapados, ingenio al resolver enigmas ancestrales y generosidad al compartir sus provisiones con aquellos en necesidad.

        La aventura de ${nombresApellidos} no solo lo llevó a lugares remotos, sino también a descubrir su propio potencial. La historia de ${nombresApellidos} es un testimonio de coraje, determinación y el espíritu de la aventura.`;

        generatedStory.textContent = story;
     });
});