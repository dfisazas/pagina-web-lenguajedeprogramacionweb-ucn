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

        const story = `${nombresApellidos}, también conocido como ${apodo}, con cabello de color ${colorCabello} y ojos de color ${colorOjos}, estaba emocionado por su próximo cumpleaños. A sus ${edad} años, planeaba celebrar de una manera inolvidable: invitó a todos sus amigos a una fiesta en su casa.

        Durante la fiesta, ${nombresApellidos} y sus amigos se divirtieron jugando al fútbol en el jardín. Luego, disfrutaron de una deliciosa comida preparada por ${nombresApellidos} y su madre. Mientras todos reían y disfrutaban, de repente, una sorpresa inesperada: apareció un mago que realizó trucos mágicos asombrosos.

        Después de la actuación del mago, la fiesta continuó con juegos, música y baile. Todos se unieron para cantar el feliz cumpleaños y partir el pastel. La noche fue mágica y llena de alegría, creando recuerdos que ${nombresApellidos} atesoraría para siempre.`;

        generatedStory.textContent = story;
     });
});