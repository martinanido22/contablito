let totalVenta = 0
let totalCompra = 0

<<<<<<< Updated upstream
=======
document.getElementById("tipoVentas").innerHTML = tipoVenta;

document.getElementById("tipoCompras").innerHTML = tipoCompra;

>>>>>>> Stashed changes
function iva() {
    if (ivaBasico.checked == true) {
        return 22;
    }
    if (ivaMinimo.checked == true) {
        return 10;
    }
    if (ivaExento.checked == true) {
        return 0;
    }
}

function total() {
    if (venta.checked == true) {
        return "Compra"
    }
    if (venta.checked == true) {
        return "Venta"
    }
}

function tIva() {
<<<<<<< Updated upstream
    return subTotal + (subTotal/100)*iva();
=======
    return subTotal + ((subTotal / 100) * iva());
}

function total() {
    if (tipoTotal() == "Compra") {
        return totalCompra += subTotal;
    }
    if (tipoTotal() == "Venta") {
        return totalVente += subTotal;
    }
>>>>>>> Stashed changes
}

function iva

document.getElementById("").addEventListener("click", () => {
    let desc = document.getElementById("").value;

    let compra = document.getElementById("");
    let venta = document.getElementById("");

<<<<<<< Updated upstream
    let ivaBasico = document.getElementById("");
    let ivaMinimo = document.getElementById("");
    let ivaExento = document.getElementById("");
=======
    let compra = document.getElementById("tipoCompra");
    let venta = document.getElementById("tipoVenta");
>>>>>>> Stashed changes

    let subTotal = document.getElementById("").value;





})