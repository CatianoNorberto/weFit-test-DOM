// menu.js
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona a classe ".menu-content"
  var menuContent = document.querySelector('.menu-content');

  // Remove o background-color definido no CSS
  menuContent.style.backgroundColor = 'transparent';
  
  // Adiciona propriedades CSS específicas no JavaScript
  menuContent.style.width = '100%';
  menuContent.style.display = 'flex';
  menuContent.style.padding = '0';
  menuContent.style.flexDirection = 'row';

  // Seleciona todos os elementos <h2> dentro da classe ".menu-content"
  var menuItems = document.querySelectorAll('.menu-content h2');

  // Aplica os estilos desejados a cada elemento
  menuItems.forEach(function(item) {
    item.style.padding = '12px';
    item.style.borderRadius = '5px';
    item.style.color = '#FFF';
    item.style.backgroundColor = '#474A51';
    item.style.marginRight = '8px';
  });
});
