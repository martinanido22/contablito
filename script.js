let tVenta = 0
let tCompra = 0

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
    return subTotal + (subTotal/100)*iva();
}

function iva

document.getElementById("").addEventListener("click", () => {
    let desc = document.getElementById("").value;

    let compra = document.getElementById("");
    let venta = document.getElementById("");

    let ivaBasico = document.getElementById("");
    let ivaMinimo = document.getElementById("");
    let ivaExento = document.getElementById("");

    let subTotal = document.getElementById("").value;





})