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
    // let iconeSelecionado = prato.querySelector(".icone");

    if (selecionado !== null) {
        selecionado.classList.remove("prato-selecionado");
        ///para armazenar o valor e retirar do cálculo se for selecionada outra bebida
        precoPrato = Number(selecionado.querySelector(".valor-prato").innerHTML.replace(',', '.'));
        valorPedido = valorPedido - precoPrato;
        
        selecionado.classList.toggle(".hidden");
    }

    if (prato !== selecionado) {
        prato.classList.toggle("prato-selecionado");
    
        prato.classList.add(".hidden"); 
    }

    // pegando o nome do prato selecionado
    precoPrato = Number(prato.querySelector(".valor-prato").innerHTML.replace(',', '.'));
    
    valorPedido += precoPrato;
    
    // pegando o nome do prato selecionado
    pedido1 = document.querySelector(".prato-selecionado strong").innerHTML;

    verificarSelecao();     // verifica se tem 1 elemento marcado em cada tipo de alimento
}

function selecionarBebida (bebida) {
    const selecionada = document.querySelector(".bebida-selecionada");

    if (selecionada !== null) {
        selecionada.classList.remove("bebida-selecionada");
        //para armazenar o valor e retirar do cálculo se for selecionada outra bebida
        precoBebida = Number(bebida.querySelector(".valor-bebida").innerHTML.replace(',', '.'));
        //retirando o valor do campo selecionado anteriormente
        valorPedido = valorPedido - precoBebida;

        selecionada.classList.toggle(".hidden");
    }

    if (bebida !== selecionada) {
        bebida.classList.toggle("bebida-selecionada");
    
        bebida.classList.add(".hidden"); 
    }
    
    // pegando o nome da bebida selecionada
    precoBebida = Number(bebida.querySelector(".valor-bebida").innerHTML.replace(',', '.'));

    valorPedido += precoBebida;
    
    // pegando o nome da bebida selecionada
    pedido2 = document.querySelector(".bebida-selecionada strong").innerHTML;

    verificarSelecao();     // verifica se tem 1 elemento marcado em cada tipo de alimento
}

function selecionarSobremesa (sobremesa) {
    const selecionada = document.querySelector(".sobremesa-selecionada");

    if (selecionada !== null) {
        selecionada.classList.remove("sobremesa-selecionada");
        //para armazenar o valor e retirar do cálculo se for selecionado outro prato
        precoSobremesa = Number(sobremesa.querySelector(".valor-sobremesa").innerHTML.replace(',', '.'));
        
        //retirando o valor do campo selecionado anteriormente
        valorPedido = valorPedido - precoSobremesa;

        selecionada.classList.toggle(".hidden");
    }

    if (sobremesa !== selecionada) {
        sobremesa.classList.toggle("sobremesa-selecionada");
    
        sobremesa.classList.add(".hidden"); 
    }

    //para armazenar o valor e retirar do cálculo se for selecionado outro prato
    precoSobremesa = Number(sobremesa.querySelector(".valor-sobremesa").innerHTML.replace(',', '.'));
    
    valorPedido += precoSobremesa;

    // pegando o nome da sobremesa
    pedido3 = document.querySelector(".sobremesa-selecionada strong").innerHTML;
    // valor1 = Number(prato.querySelector(".valor-prato").innerHTML.replace(',', '.'));

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
    document.querySelector(".botao-ativo").disabled=false;
}

function confirmarPedido() {
    valorPedido = valorPedido.toFixed(2);

    const confirmar = document.querySelector(".confirmar-pedido");

    confirmar.classList.toggle("hidden");

    document.querySelector(".pedido-prato .prato").innerHTML=`${pedido1}`;
    document.querySelector(".pedido-prato .valor").innerHTML= `R$ ${precoPrato}`;

    document.querySelector(".pedido-bebida .bebida").innerHTML=`${pedido2}`;
    document.querySelector(".pedido-bebida .valor").innerHTML= `R$ ${precoBebida}`;

    document.querySelector(".pedido-sobremesa .sobremesa").innerHTML=`${pedido3}`
    document.querySelector(".pedido-sobremesa .valor").innerHTML= `R$ ${precoSobremesa}`;

    document.querySelector(".total .valor").innerHTML=`R$ ${valorPedido}`;
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