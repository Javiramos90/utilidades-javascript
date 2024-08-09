const saludoTxt = document.getElementById(`saludo`);
const nameInputContainer = document.getElementById(`name-input-container`);
const nameInput = document.getElementById(`name-input`);
const submitBtn = document.getElementById(`submit-name`);
let hora = new Date().getHours();
let saludo = `bienvenido`;


function guardarNombre(){
  const name = nameInput.value.trim();
    if(name.length > 1){
        localStorage.setItem(`nombreUsuario`, name);
        mostrarNombre(name);
    }
}

function mostrarNombre(name) {
    if(hora >=6 && hora < 12){
        saludo = `Buenos dias`;
    }else if(hora >= 12 && hora <=19){
        saludo = `Buenas Tardes`;
    }else {
        saludo = `Buenas Noches`;
    }
    saludoTxt.textContent = `${saludo}, ${name}`;
    nameInputContainer.style.display = `none`;

}

submitBtn.addEventListener(`click`, guardarNombre);
nameInput.addEventListener(`keypress`, function (e) {
    if(e.key ===`Enter`){
        guardarNombre();
    }  
});

// comprobar si ya hay un nombre guardado 
// si hay un nombre guardado lo muestra
const nombreGuardado = localStorage.getItem(`nombreUsuario`);
if(nombreGuardado) {
  mostrarNombre(nombreGuardado);  
}


