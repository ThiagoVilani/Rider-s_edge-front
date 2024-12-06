async function hacerTicket() {
    const productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const response = await fetch('https://rider-s-edge-back.onrender.com/ticket/mostrar-ticket', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idVenta:localStorage.getItem("idVenta") })
});

document.getElementById("formTicket").innerHTML= await response.text();

}

hacerTicket();