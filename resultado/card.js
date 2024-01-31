document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o container de cards
  const cardsContainer = document.querySelector(".cards-content");

  // Seleciona os cards
  const cards = cardsContainer.querySelectorAll(".card");

  // Obtém as referências dos cards específicos
  const cardNatureza = cards[3];
  const cardAnimais = cards[0];
  const cardPessoas = cards[2];
  const cardTecnologia = cards[1];

  // Remove os cards do container
  cardsContainer.removeChild(cardNatureza);
  cardsContainer.removeChild(cardAnimais);
  cardsContainer.removeChild(cardPessoas);
  cardsContainer.removeChild(cardTecnologia);

  // Adiciona os cards na ordem desejada
  cardsContainer.appendChild(cardNatureza);
  cardsContainer.appendChild(cardAnimais);
  cardsContainer.appendChild(cardPessoas);
  cardsContainer.appendChild(cardTecnologia);

  // Adiciona a cor verde ao botão do card "Animais"
  const buttonAnimais = cardAnimais.querySelector("button");
  buttonAnimais.style.backgroundColor = "green";
});
