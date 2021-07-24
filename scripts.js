function selecionarPrato (prato) {
    const selecionado = document.querySelector(".prato-selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("prato-selecionado");
        selecionado.classList.remove("icone");
    }
    prato.classList.toggle("prato-selecionado");
    prato.classList.toggle("icone");
}

function selecionarBebida (bebida) {
    const selecionada = document.querySelector(".bebida-selecionada");

    if (selecionada !== null) {
        selecionada.classList.remove("bebida-selecionada");
    }
    bebida.classList.toggle("bebida-selecionada");
}

function selecionarSobremesa (sobremesa) {
    const selecionada = document.querySelector(".sobremesa-selecionada");

    if (selecionada !== null) {
        selecionada.classList.remove("sobremesa-selecionada");
    }
    sobremesa.classList.toggle("sobremesa-selecionada");
}

