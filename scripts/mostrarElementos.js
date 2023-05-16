function mostrarCamera() {
  var cameraDiv = document.getElementById('interactive');
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
  var cameraDiv = document.getElementById('interactive');
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