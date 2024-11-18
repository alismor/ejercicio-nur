function calcularPrecio() {
    const tipoCarro = document.getElementById("tipoCarro").value;
    const dias = parseInt(document.getElementById("dias").value);
    const resultado = document.getElementById("resultado");

    let precioPorDia = 100; // Precio base, ajustable según el tipo de carro.
    let fondo = "";

    if (dias <= 2) {
        fondo = "orange";
    } else if (dias <= 5) {
        fondo = "yellow";
    } else if (dias <= 10) {
        fondo = "green";
    } else {
        fondo = "blue";
    }

    const precioTotal = dias * precioPorDia;

    resultado.style.backgroundColor = fondo;
    resultado.innerHTML = `
        <p>Has alquilado un <strong>${tipoCarro}</strong> por <strong>${dias} días</strong>.</p>
        <p>El precio total es: <strong>${precioTotal}€</strong>.</p>
    `;
}
