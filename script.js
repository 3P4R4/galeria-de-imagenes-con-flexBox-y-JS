const abrirPanel = document.querySelectorAll(".panel");

function AbrirYcerrar(){
    this.classList.toggle('open');
    /* this.classList.toggle('open-active'); */ // al activar esta linea y desactivar 
    // la función btnActivo + la linea 16, esta crear un efecto distinto
}
function btnActivo(e){
    if (e.propertyName.includes('flex')) {
        
        this.classList.toggle('open-active');
    }
}
/*  */
abrirPanel.forEach(panel => panel.addEventListener('click', AbrirYcerrar));
abrirPanel.forEach(panel => panel.addEventListener('transitionend', btnActivo));