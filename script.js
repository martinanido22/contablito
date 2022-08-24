let totalVenta = 0
let totalCompra = 0

document.getElementById("tipoVentas").innerHTML = tipoVenta;

document.getElementById("tipoCompras").innerHTML = tipoCompra;

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
        return totalCompra += subTotal;
    }
    if (tipoTotal() == "Venta") {
        return totalVente += subTotal;
    }
}



document.getElementById("ingresar").addEventListener("click", () => {
    let desc = document.getElementById("desc").value;

    let compra = document.getElementById("tipoCompra");
    let venta = document.getElementById("tipoVenta");

    let ivaBasico = document.getElementById("ivaBasico");
    let ivaMinimo = document.getElementById("ivaMinimo");
    let ivaExento = document.getElementById("ivaExento");

    let subTotal = document.getElementById("subTotal").value;

    



})
