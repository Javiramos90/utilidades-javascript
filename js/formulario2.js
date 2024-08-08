const modal = document.getElementById(`imageModal`);
const modalImg = document.querySelector(`.modal-image`);
const closeBtn = document.querySelector(`.close`);
const politicaTxt = document.querySelectorAll(`.text-politica`);
const cbox = document.querySelectorAll(`.cboxx`);
politicaTxt.forEach(thumb => {
    thumb.addEventListener(`click`, () => {
        modal.style.display = "block";
        modalImg.src = thumb.getAttribute(`data-full`);
        modalImg.alt = thumb.alt;
    });
});

closeBtn.addEventListener(`click`, () => {
    modal.style.display = "none";
});

window.onclick = (event) => {
    if (event.target.classList.contains(`modal-content`)){
        modal.style.display = "none";
    }
}

document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // comprobar si el checkbox está seleccionado
    if (!cbox.check){
        alert('Por favor acepta la política de privacidad');
    }else{
        alert('Formulario enviado!');
    }
});






