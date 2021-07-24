let valorPedido = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;


function selecionarPrato (prato) {
    const selecionado = document.querySelector(".prato-selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("prato-selecionado");
        precoPrato = Number(selecionado.querySelector(".valor-prato").innerHTML.replace(',', '.'))
    }
    prato.classList.toggle("prato-selecionado");

    if(precoPrato === 0) {
        valorPedido += Number(prato.querySelector(".valor-prato").innerHTML.replace(',', '.'));
        precoPrato = 1;
    }
    else {
        valorPedido = valorPedido - precoPrato;
        valorPedido += Number(prato.querySelector(".valor-prato").innerHTML.replace(',', '.'));
    }
    console.log(valorPedido);
}

function selecionarBebida (bebida) {
    const selecionada = document.querySelector(".bebida-selecionada");

    if (selecionada !== null) {
        selecionada.classList.remove("bebida-selecionada");
        precoBebida = Number(selecionada.querySelector(".valor-bebida").innerHTML.replace(',', '.'))
    }
    bebida.classList.toggle("bebida-selecionada");

    if(precoBebida === 0) {
        valorPedido += Number(bebida.querySelector(".valor-bebida").innerHTML.replace(',', '.'));
        precoBebida = 1;
    }
    else {
        valorPedido = valorPedido - precoBebida;
        valorPedido += Number(bebida.querySelector(".valor-bebida").innerHTML.replace(',', '.'));
    }
    console.log(valorPedido);
}

function selecionarSobremesa (sobremesa) {
    const selecionada = document.querySelector(".sobremesa-selecionada");

    if (selecionada !== null) {
        selecionada.classList.remove("sobremesa-selecionada");
        precoSobremesa = Number(selecionada.querySelector(".valor-sobremesa").innerHTML.replace(',', '.'))
    }
    sobremesa.classList.toggle("sobremesa-selecionada");

    if(precoSobremesa === 0) {
        valorPedido += Number(sobremesa.querySelector(".valor-sobremesa").innerHTML.replace(',', '.'));
        precoSobremesa = 1;
    }
    else {
        valorPedido = valorPedido - precoSobremesa;
        valorPedido += Number(sobremesa.querySelector(".valor-sobremesa").innerHTML.replace(',', '.'));
    }
    console.log(valorPedido);
}

function fecharPedido() {
    if (precoPrato !== 0 && precoBebida !== 0 && precoSobremesa !== 0) {

    }
}