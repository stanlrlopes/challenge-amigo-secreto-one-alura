//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();
    const listaAmigosElement = document.getElementById("listaAmigos");
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    listaAmigos.push(nome);
    
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigosElement.appendChild(li);
    
    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
