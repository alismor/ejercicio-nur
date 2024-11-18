function calcularNomina() {
    const salarioBase = parseFloat(document.getElementById("salarioBase").value);
    const ingresos = parseFloat(document.getElementById("ingresos").value);
    const egresos = parseFloat(document.getElementById("egresos").value);

    if (isNaN(salarioBase) || isNaN(ingresos) || isNaN(egresos)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    const totalIngresos = salarioBase + ingresos;
    const salarioNeto = totalIngresos - egresos;

    const resultadoDiv = document.getElementById("resultadoNomina");

    resultadoDiv.innerHTML = `
        <p>Total ingresos: <span class="ingresos">${totalIngresos.toFixed(2)}€</span></p>
        <p>Total egresos: <span class="egresos">${egresos.toFixed(2)}€</span></p>
        <p class="total">Salario Neto: ${salarioNeto.toFixed(2)}€</p>
    `;
}
