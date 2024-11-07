let circulos = [];

function setup() {
  let miCanvas = createCanvas(windowWidth, windowHeight);
  miCanvas.parent("#my-p5-skecth");
  noStroke();
}

function draw() {
  background(0, 50); // Fondo más opaco para que resalten los colores neón

  // Agregar la posición actual del mouse al arreglo de círculos
  circulos.push({ x: mouseX, y: mouseY });

  // Limitar la cantidad de círculos en el rastro
  if (circulos.length > 50) {
    circulos.shift(); // Elimina el primer elemento si el array es muy grande
  }

  // Dibujar los círculos con efecto de neón
  for (let i = 0; i < circulos.length; i++) {
    let size = map(i, circulos.length - 1, 0, 5, 50); // Tamaño de grande a pequeño

    // Colores ajustados con el nuevo tono
    let r = map(i, circulos.length - 1, 0, 255, 255);
    let g = map(i, circulos.length - 1, 0, 184, 184);
    let b = map(i, circulos.length - 1, 0, 76, 76);

    // Efecto de resplandor
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(r, g, b);

    fill(r, g, b, 200); // Mayor opacidad para efecto neón
    ellipse(circulos[i].x, circulos[i].y, size, size);
  }

  // Restablecer la configuración de la sombra para que no afecte otros dibujos
  drawingContext.shadowBlur = 0;
}
