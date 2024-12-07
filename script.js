let indice = 0;

function mostrarImagem(indiceAtual) {
    const imagens = document.querySelector('.imagens');
    const totalImagens = imagens.children.length;
    if (indiceAtual >= totalImagens) {
        indice = 0;
    } else if (indiceAtual < 0) {
        indice = totalImagens - 1;
    } else {
        indice = indiceAtual;
    }
    imagens.style.transform = `translateX(${-indice * 100}%)`;
}

function mudarImagem(direcao) {
    mostrarImagem(indice + direcao);
}

// Inicializa o carrossel
mostrarImagem(indice);

//Exercicios

function calcularIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultadoDiv = document.getElementById("resultado");

  if (altura > 1 && peso > 30 && altura<2.5 && peso < 400) {
    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    resultadoDiv.innerHTML = `Seu IMC é <strong>${imc}</strong> (${classificacao}).`;
  } else {
    resultadoDiv.innerHTML = "Por favor, insira valores válidos.";
  }
}
//BEM ESTAR================================================================================

let intervalo; // Variável para armazenar o intervalo

function iniciarMeditacao() {
  const mensagem = document.getElementById("mensagem");
  const temporizador = document.getElementById("temporizador");

  // Reseta o estado inicial
  mensagem.innerText = "Inspire profundamente...";
  temporizador.innerText = "4 segundos";

  let etapa = "inspirar"; // Controla a etapa atual (inspirar/expirar)
  let tempoRestante = 4; // Tempo restante para cada etapa

  // Atualiza o cronômetro a cada segundo
  intervalo = setInterval(() => {
    tempoRestante--;

    if (tempoRestante >= 0) {
      temporizador.innerText = `${tempoRestante} segundos`;
    }

    // Quando o tempo da etapa termina, alterna entre inspirar e expirar
    if (tempoRestante < 0) {
      if (etapa === "inspirar") {
        mensagem.innerText = "Expire lentamente...";
        etapa = "expirar";
      } else {
        mensagem.innerText = "Inspire profundamente...";
        etapa = "inspirar";
      }
      tempoRestante = 4; // Reinicia o tempo para a próxima etapa
    }
  }, 1000); // Atualiza a cada 1 segundo
}

function pararMeditacao() {
  
  document.getElementById('temporizador').innerHTML = ''
  document.getElementById('mensagem').innerHTML = 'Clique em "Iniciar Meditação" para começar.'
  clearInterval(intervalo);
}

//FORMULARIO=============================================================================================

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;


  const responseMessage = document.getElementById("responseMessage");
  responseMessage.innerText = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
  
  // Limpa o formulário
  document.getElementById("contactForm").reset();
});


