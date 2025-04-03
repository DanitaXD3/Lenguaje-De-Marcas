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

changeNameColorButton.addEventListener('click', () => {
    
    console.warn("click -------");
    alert("Ahora el nombre va a cambiar de color");
    fullNameH1.style = "color: red; font-style: italic";
    
});
