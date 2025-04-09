const profileImage = document.getElementById('dana');

profileImage.addEventListener('mouseover', () => {
    profileImage.style.boxShadow = '0 0px 1000px rgba(9,9,9,9)';
    profileImage.src = "../imagenes/a.jpg";

});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.boxShadow = 'none';
    profileImage.src = "../imagenes/dana.jpg";

});

var changeNameColorButton= document.getElementById('botonNombre');
var fullNameH1 = document.getElementById('fullName');
const Name = fullNameH1.textContent;

changeNameColorButton.addEventListener('click', () => {
    
    console.warn("click -------");
    alert("Ahora el nombre va a cambiar de color");
    if(fullNameH1.style.color===""){
        fullNameH1.style="color: purple; font-style: italic;";
        fullNameH1.textContent="1º DAW";
    }else {
        fullNameH1.style="";
        fullNameH1.textContent=Name;
    }


    
});

var ocultarNombre = document.getElementById('ocultar')
ocultarNombre.addEventListener('click', () => {
    if(fullNameH1.style.display==="none"){
        fullNameH1.style.display="block";
    } else {
        fullNameH1.style.display="none";
    }

});

var mostrarFormu = document.getElementById('boton')
mostrarFormu.addEventListener('click', () => {
    if(contactForm.style.display==="none"){
        contactForm.style.display="block";
        boton.textContent ="Hide Form"
    } else {
        contactForm.style.display="none";
        boton.textContent="Show Form"
    }

});
