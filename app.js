let fotosSeleccionadas = [];

/* BOTONES */

const botones =
document.querySelectorAll(".select-btn");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const card = boton.closest(".card");

        const imagen = card.querySelector("img");

        const codigo = imagen.dataset.img;

        if(fotosSeleccionadas.includes(codigo)){

            fotosSeleccionadas =
            fotosSeleccionadas.filter(f => f !== codigo);

            boton.classList.remove("selected");

            boton.innerHTML = `
            <i class="fa-solid fa-cart-shopping"></i>
            Seleccionar
            `;

        }else{

            fotosSeleccionadas.push(codigo);

            boton.classList.add("selected");

            boton.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Seleccionada
            `;

        }

    });

});

/* WHATSAPP */

function enviarWhatsApp(){

    if(fotosSeleccionadas.length === 0){

        alert("Seleccioná al menos una foto");

        return;

    }

    let mensaje =
    "Hola YAMIPH, quiero comprar estas fotos:%0A%0A";

    fotosSeleccionadas.forEach(foto => {

        mensaje += "📸 " + foto + "%0A";

    });

    mensaje += `
    %0A
    Ya realicé el pago y adjunto comprobante.
    `;

    const numero = "542644123456";

    const url =
    `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, "_blank");

}

/* BLOQUEAR CLICK DERECHO */

document.addEventListener("contextmenu",
(evento) => {

    evento.preventDefault();

});

/* BLOQUEAR ARRASTRAR */

document.addEventListener("dragstart",
(evento) => {

    evento.preventDefault();

});