function getHoroscope() {
    const zodiacInput = document.getElementById("zodiacInput").value.toLowerCase();
    let predictionText, predictionImage;
    switch (zodiacInput) {
      case "aries":
        predictionText = "Esta semana será llena de energía para ti, Aries.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "tauro":
        predictionText = "Tauro, es posible que encuentres estabilidad en diversos aspectos de tu vida.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "géminis":
        predictionText = "Géminis, tu habilidad para comunicarte te será muy útil esta semana.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "cáncer":
        predictionText = "Cáncer, es momento de cuidar tu salud y bienestar.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "leo":
        predictionText = "Leo, tu creatividad estará en su punto más alto esta semana.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "virgo":
        predictionText = "Virgo, es posible que enfrentes algunos desafíos, pero podrás superarlos.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "libra":
        predictionText = "Libra, es momento de tomar decisiones importantes en tu vida.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "escorpio":
        predictionText = "Escorpio, esta semana será de grandes cambios para ti.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "sagitario":
        predictionText = "Sagitario, tus metas están más cerca de lo que piensas.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "capricornio":
        predictionText = "Capricornio, mantén la calma frente a los desafíos que se te presenten.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "acuario":
        predictionText = "Acuario, este es un buen momento para explorar nuevas oportunidades.";
        predictionImage = "https://picsum.photos/150";
        break;
      case "piscis":
        predictionText = "Piscis, confía en tu intuición para tomar decisiones importantes.";
        predictionImage = "https://picsum.photos/150";
        break;
      default:
        predictionText = "No se ha ingresado un signo válido del zodiaco.";
        predictionImage = "https://picsum.photos/150";
    }

    const predictionResult = document.getElementById("predictionResult");
      predictionResult.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Predicción:</h5>
            <p class="card-text">${predictionText}</p>
            <img src="${predictionImage}" class="prediction-img" alt="Prediction Image">
          </div>
        </div>
      `;
    }
