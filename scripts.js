let valorPedido = 0;
let precoPrato = null;
let precoBebida = null;
let precoSobremesa = null;
let pedido1 = "";
let pedido2 = "";
let pedido3 = "";
const botaoFecharPedido = document.querySelector(".fechar-pedido");

function selecionarPrato (prato) {
    const selecionado = document.querySelector(".prato-selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("prato-selecionado");
        //para armazenar o valor e retirar do cálculo se for selecionado outro prato
        precoPrato = Number(selecionado.querySelector(".valor-prato").innerHTML.replace(',', '.'))
    }
    prato.classList.toggle("prato-selecionado");

    if(precoPrato === null) {
        valorPedido += Number(prato.querySelector(".valor-prato").innerHTML.replace(',', '.'));
        //para mudar o valor 0 anterior, para identificar na função fecharPedido que o campo já tem 1 item selecionado 
        precoPrato = 0;
    }
    else {
        valorPedido = valorPedido - precoPrato;
        valorPedido += Number(prato.querySelector(".valor-prato").innerHTML.replace(',', '.'));
    }
    // pegando o nome do prato selecionado
    pedido1 = document.querySelector(".prato-selecionado strong").innerHTML;
    console.log(valorPedido);

    verificarSelecao();     // verifica se tem 1 elemento marcado em cada tipo de alimento
}

function selecionarBebida (bebida) {
    const selecionada = document.querySelector(".bebida-selecionada");

    if (selecionada !== null) {
        selecionada.classList.remove("bebida-selecionada");
        //para armazenar o valor e retirar do cálculo se for selecionada outra bebida
        precoBebida = Number(selecionada.querySelector(".valor-bebida").innerHTML.replace(',', '.'))
    }
    bebida.classList.toggle("bebida-selecionada");

    if(precoBebida === null) {
        valorPedido += Number(bebida.querySelector(".valor-bebida").innerHTML.replace(',', '.'));
        //para mudar o valor 0 anterior, para identificar na função fecharPedido que o campo já tem 1 item selecionado 
        precoBebida = 0;
    }
    else {
        valorPedido = valorPedido - precoBebida;
        valorPedido += Number(bebida.querySelector(".valor-bebida").innerHTML.replace(',', '.'));
    }
    // pegando o nome da bebida selecionada
    pedido2 = document.querySelector(".bebida-selecionada strong").innerHTML;
    console.log(valorPedido);

    verificarSelecao();     // verifica se tem 1 elemento marcado em cada tipo de alimento
}

function selecionarSobremesa (sobremesa) {
    const selecionada = document.querySelector(".sobremesa-selecionada");

    if (selecionada !== null) {
        selecionada.classList.remove("sobremesa-selecionada");
        //para armazenar o valor e retirar do cálculo se for selecionada outra sobremesa
        precoSobremesa = Number(selecionada.querySelector(".valor-sobremesa").innerHTML.replace(',', '.'))
    }
    sobremesa.classList.toggle("sobremesa-selecionada");

    if(precoSobremesa === null) {
        valorPedido += Number(sobremesa.querySelector(".valor-sobremesa").innerHTML.replace(',', '.'));
        //para mudar o valor 0 anterior, para identificar na função fecharPedido que o campo já tem 1 item selecionado
        precoSobremesa = 0;
    }
    else {
        //retirando o valor do campo selecionado anteriormente
        valorPedido = valorPedido - precoSobremesa;
        valorPedido += Number(sobremesa.querySelector(".valor-sobremesa").innerHTML.replace(',', '.'));
    }
    // pegando o nome da sobremesa
    pedido3 = document.querySelector(".sobremesa-selecionada strong").innerHTML;
    console.log(valorPedido);

    verificarSelecao();     // verifica se tem 1 elemento marcado em cada tipo de alimento
}

function verificarSelecao() {
    if (precoPrato !== null && precoBebida !== null && precoSobremesa !== null) {
        ativarBotao();
    }
}

function ativarBotao() {
    botaoFecharPedido.classList.add("botao-ativo");
    document.querySelector(".botao-ativo").innerHTML="Fechar Pedido";
    //confirmarPedido();
    console.log(botaoFecharPedido)
}

function confirmarPedido() {
    //se todos os 3 campos têm 1 item selecionado
    // valorPedido = valorPedido.toFixed(2);

    const confirmar = document.querySelector(".confirmar-pedido");

    confirmar.classList.toggle("hidden");
    document.querySelector(".pedido").innerHTML=`<br><strong>- Prato:</strong>${pedido1} <br><strong>- Bebida: </strong>${pedido2} <br><strong>- Sobremesa: </strong>${pedido3} <br><br><strong>Valor: R$ </strong>${valorPedido}<br><br>`;
}

function fecharCarrinho() {
    const cancelar = document.querySelector(".confirmar-pedido");
    // esconde a area do carrinho
    cancelar.classList.toggle("hidden");
    ativarBotao();
}

function enviarPedido() {
    linkEnvioWhats = encodeURI(`*Pedido:*\n*- Prato:* ${pedido1} \n*- Bebida:* ${pedido2} \n*- Sobremesa:* ${pedido3} \n*Valor:* R$ ${valorPedido}`);

    //link para envio direto no WhatsApp já com a mensagem de descrição do pedido
    window.location.href = "https://wa.me/1111111111111?text=" + linkEnvioWhats;
}