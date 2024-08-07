const imagenPrincipal = document.getElementById('imagenPrincipal');
const miniaturas = document.querySelectorAll('.peque');
// const miniaturas = document.getElementsByClassName('miniatura');


const miniaturasArray = [
    {imagen: "img/sol.jpg", altImagen: "Sol"},
    {imagen: "img/ciudad.jpg", altImagen: "Ciudad"},
    {imagen: "img/lago.jpg", altImagen: "Lago"},
    {imagen: "img/lagoVerde.jpg", altImagen: "LagoVerde"},
]

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function(e) {
        let idImagen = e.currentTarget.id;
        imagenPrincipal.src = miniaturasArray[idImagen].imagen;
        imagenPrincipal.alt = miniaturasArray[idImagen].altImagen;
    });
});