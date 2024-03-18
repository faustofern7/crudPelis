//variables Globales
const btnAgregarPelicula = document.getElementById('btnCrearPelicula');
const modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'));
modalPelicula.show();


//Funciones
function mostrarModalPelicula(){
    modalPelicula.show();

}




//logica
btnAgregarPelicula.addEventListener('click', mostrarModalPelicula )