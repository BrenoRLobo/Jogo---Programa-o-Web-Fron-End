document.addEventListener("DOMContentLoaded", function() {
    const numeroMinimo = 1;
    const numeroMaximo = 100;
    const numeroAleatorio = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
    let tentativas = 0;
  
    const campoPalpite = document.getElementById("guessInput");
    const botaoPalpite = document.getElementById("guessButton");
    const mensagem = document.getElementById("message");
  
    botaoPalpite.addEventListener("click", function() {
      const palpite = parseInt(campoPalpite.value);
  
      if (isNaN(palpite) || palpite < numeroMinimo || palpite > numeroMaximo) {
        setMessage("Por favor, insira um número válido entre 1 e 100", "red");
      } else {
        tentativas++;
        if (palpite === numeroAleatorio) {
          setMessage(`Parabéns! Você adivinhou o número ${numeroAleatorio} em ${tentativas} tentativas!`, "green");
          campoPalpite.disabled = true;
          botaoPalpite.disabled = true;
        } else {
          const dica = palpite < numeroAleatorio ? "maior" : "menor";
          setMessage(`Tente novamente! Adivinhe um número ${dica}`, "blue");
        }
      }
    });
  
    function setMessage(msg, cor) {
      mensagem.style.color = cor;
      mensagem.textContent = msg;
    }
  });
  