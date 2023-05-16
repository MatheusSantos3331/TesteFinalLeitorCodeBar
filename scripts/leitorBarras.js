
var beepSound = new Audio("barcode.wav");

    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#camera'),
        constraints: {
          width: 640,
          height: 480,
          facingMode: "environment" // use "user" para a câmera frontal
        }
      },
      decoder: {
        readers: ["ean_reader"] // define o tipo de código de barras a ser lido (EAN-13)
      }
    }, function(err) {
      if (err) {
        console.error("Erro ao inicializar o Quagga: ", err);
        return;
      }
      console.log("Quagga inicializado com sucesso.");
      Quagga.start();
    });

    Quagga.onDetected(function(result) {
      var code = result.codeResult.code;
      console.log("Código de barras detectado:", code);
      document.getElementById("result").textContent = "Resultado: " + code;
      
      beepSound.play(); // Reproduz o som quando um código de barras é detectado
    });