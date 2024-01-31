document.addEventListener('DOMContentLoaded', function() {
  // Criar o quarto item
  var quartoItem = document.createElement('div');
  quartoItem.className = 'divide';
  quartoItem.innerHTML = '<h2>Quarto item</h2>';

  // Adicionar estilos ao quarto item
  quartoItem.style.backgroundColor = '#009EDD';
  quartoItem.style.color = 'white';

  // Criar o quinto item
  var quintoItem = document.createElement('div');
  quintoItem.className = 'divide';
  quintoItem.innerHTML = '<h2>Quinto item</h2>';

  // Adicionar os itens à lista-content
  var listaContent = document.querySelector('.lista-content');
  listaContent.appendChild(quartoItem);
  listaContent.appendChild(quintoItem);

  // Adicionar estilo padrão para os itens (exceto o quarto)
  var itens = listaContent.children;
  for (var i = 0; i < itens.length; i++) {
    if (itens[i] !== quartoItem) {
      itens[i].style.backgroundColor = 'initial';
      itens[i].style.color = 'initial';
    }
  }
});
