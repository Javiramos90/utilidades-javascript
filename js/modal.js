const modal = document.getElementById(`imageModal`);
const modalImg = document.querySelector(`.modal-image`);
const closeBtn = document.querySelector(`.close`);
const thumbnails = document.querySelectorAll(`.thumbnail`);

thumbnails.forEach(thumb => {
    thumb.addEventListener(`click`, () =>{
        modal.style.display = "block";
        modalImg.src = thumb.getAttribute(`data-full`);
        modalImg.alt =thumb.alt;
    });
});
//cerramos el modal en el boton x
closeBtn.addEventListener(`click`, ()=>{
    modal.style.display = "none"; 
});
// closeBtn.onclick = () =>{
//     modal.style.display = "none";
// };

// cierra el modal en los margenes de las imagenes 
window.onclick = (event) => {
    if (event.target.classList.contains(`modal-content`)){
        modal.style.display = "none"; 
    }
}