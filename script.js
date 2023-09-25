document.addEventListener("DOMContentLoaded", function() {
    let count = 1;
    document.getElementById("radio1").checked = true;
  
    setInterval(function() {
      nextImage();
    }, 2000);
  
    function nextImage() {
      count++;
      if (count > 4) {
        count = 1;
      }
  
      document.getElementById("radio" + count).checked = true;
    }
  });


   // Função para criar o efeito de máquina de escrever
   function typeWriterEffect(textElement, text, speed) {
    let index = 0;
    const textLength = text.length;
    const interval = setInterval(function () {
        textElement.textContent += text[index]; // Adiciona o próximo caractere ao texto
        index++;
        if (index === textLength) { // Verifica se o texto está totalmente escrito
            clearInterval(interval); // Para a animação
        }
    }, speed); // Velocidade de digitação
}

// Obtém os elementos HTML que queremos animar
const h2Element = document.getElementById("h2-element");
const h3Element = document.getElementById("h3-element");

// Inicia a animação do primeiro elemento
typeWriterEffect(h2Element, "aqui você vai encontrar ...", 100);

// Inicia a animação do segundo elemento após um atraso
setTimeout(function () {
    typeWriterEffect(h3Element, "Os melhores profissionais", 100);
}, 3000); // Delay de 1,5 segundos antes de iniciar a segunda animação

  