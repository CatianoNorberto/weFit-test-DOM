document.addEventListener('DOMContentLoaded', function() {
  var headerContent = document.querySelector('.header-content');
  if (headerContent) {
    headerContent.style.textAlign = 'right';
    headerContent.style.color = 'white';
    headerContent.style.backgroundColor = '#474A51';
    
    var learnMoreButton = headerContent.querySelector('button');
    if (learnMoreButton) {
      learnMoreButton.style.backgroundColor = 'green';
    }
  }
});
