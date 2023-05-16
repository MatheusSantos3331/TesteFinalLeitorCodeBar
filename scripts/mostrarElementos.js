function mostrarCamera() {
    var cameraDiv = document.getElementById('camera');
    cameraDiv.style.display = 'block';
}
function mostrarInputs(elementId) {
    if (elementId === 'codigoInterno') {
      var codigoInternoInput = document.getElementById('codigoInternoInput');
      var codigoInternoButton = document.getElementById('codigoInternoButton');
      
      codigoInternoInput.style.display = 'block';
      codigoInternoButton.style.display = 'block';
    } else if (elementId === 'nomeProduto') {
      var nomeProdutoInput = document.getElementById('nomeProdutoInput');
      var nomeProdutoButton = document.getElementById('nomeProdutoButton');
      
      nomeProdutoInput.style.display = 'block';
      nomeProdutoButton.style.display = 'block';
    }
  }
  function mostrarCamera() {
    var cameraDiv = document.getElementById('camera');
    var codigoInternoInput = document.getElementById('codigoInternoInput');
    var codigoInternoButton = document.getElementById('codigoInternoButton');
    var nomeProdutoInput = document.getElementById('nomeProdutoInput');
    var nomeProdutoButton = document.getElementById('nomeProdutoButton');
    
    cameraDiv.style.display = 'block';
    codigoInternoInput.style.display = 'none';
    codigoInternoButton.style.display = 'none';
    nomeProdutoInput.style.display = 'none';
    nomeProdutoButton.style.display = 'none';
  }

  function mostrarInputs(elementId) {
    var cameraDiv = document.getElementById('camera');
    var codigoInternoInput = document.getElementById('codigoInternoInput');
    var codigoInternoButton = document.getElementById('codigoInternoButton');
    var nomeProdutoInput = document.getElementById('nomeProdutoInput');
    var nomeProdutoButton = document.getElementById('nomeProdutoButton');
    
    cameraDiv.style.display = 'none';
    
    if (elementId === 'codigoInterno') {
      codigoInternoInput.style.display = 'block';
      codigoInternoButton.style.display = 'block';
      nomeProdutoInput.style.display = 'none';
      nomeProdutoButton.style.display = 'none';
    } else if (elementId === 'nomeProduto') {
      codigoInternoInput.style.display = 'none';
      codigoInternoButton.style.display = 'none';
      nomeProdutoInput.style.display = 'block';
      nomeProdutoButton.style.display = 'block';
    }
  }