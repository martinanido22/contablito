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

function tipoTotal() {
    if (venta.checked == true) {
        return "Compra";
    }
    if (venta.checked == true) {
        return "Venta";
    }
}

function tIva() {
    return subTotal + ((subTotal / 100) * iva());
}

function total() {
    if (tipoTotal() == "Compra") {
        return tCompra += subTotal;
    }
    if (tipoTotal() == "Venta") {
        return tVente += subTotal;
    }
}


document.getElementById("ingresar").addEventListener("click", () => {
    let desc = document.getElementById("desc").value;

    let compra = document.getElementById("tCompra");
    let venta = document.getElementById("tVenta");

    let ivaBasico = document.getElementById("ivaBasico");
    let ivaMinimo = document.getElementById("ivaMinimo");
    let ivaExento = document.getElementById("ivaExento");

    let subTotal = document.getElementById("subTotal").value;





})