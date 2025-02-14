document.addEventListener('DOMContentLoaded', function() {
    
    let btnOpen = document.getElementById('btnOpenMenu');
    let btnClose = document.getElementById('btnCloseMenu');
    let menu = document.getElementById('menu');
        
// LÓGICA PARA MOSTRAR EL MENÚ CUANDO EL USUARIO HACE CLICK EN EL ICONO DE LAS BARRAS
btnOpen.addEventListener('click', function() {
    menu.classList.add('open');
});

// LÓGICA PARA QUITAR EL MENÚ CUANDO EL USUARIO HACE CLICK EN EL ICONO DE LA X
btnClose.addEventListener('click', function() {
    menu.classList.remove('open');
});
});