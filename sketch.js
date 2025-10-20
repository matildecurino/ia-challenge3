let x;
let y;

let xSpeed;
let ySpeed;

let dvd;

let red;
let green;
let blue;

let scaleFactor;

let rotationAngle;

function preload() {
  dvd = loadImage('dvd_logo.png');
}

function setup() {
  createCanvas(800, 600);

  angleMode(DEGREES);
  
  //posizione random del dvd (all'inizio)
  x = random(width);
  y = random(height);

  //velocità
  xSpeed = 5;
  ySpeed = 5;

  //all'inizio il dvd ha la dimensione del file di partenza
  scaleFactor = 1;
  //all'inizio il dvd non è ruotato 
  rotationAngle = 0;

  //chiamata la funzione pickColor 
  pickColor();
}

function pickColor() {
  red = random(100, 256);
  green = random(100, 256);
  blue = random(100, 256);
}

function increaseSize() {
  scaleFactor = scaleFactor + 0.05;

  //scala massima che dvd può avere 
  const maxScale = min(width / dvd.width, height / dvd.height) * 0.9;
  //quando raggiunge la scala massima, viene fissata 
  if (scaleFactor > maxScale) {
    scaleFactor = maxScale;
  }
}

function changeRotation() {
  rotationAngle = rotationAngle + 30;
}

function draw() {
  background(0);

  //dvd dimensioni: moltiplico per scale factor
  let w = dvd.width * scaleFactor;
  let h = dvd.height * scaleFactor;

  push();
  translate(x, y);
  rotate(rotationAngle);
  scale(scaleFactor);
  //Tints images using a color.
  tint(red, green, blue);
  image(dvd, -dvd.width / 2, -dvd.height / 2);
  pop();

  //la posizione viene aggiornata perchè si sposta di 5 ogni volta
  x = x + xSpeed;
  y = y + ySpeed;

  
  if (x + w/2 >= width) {
    x = width - w/2;
    xSpeed = -xSpeed;
    pickColor();
    increaseSize();
    changeRotation();
  } else if (x - w/2 <= 0) {
    x = w/2;
    xSpeed = -xSpeed;
    pickColor();
    increaseSize();
    changeRotation();
  }

  if (y + h/2 >= height) {
    y = height - h/2;
    ySpeed = -ySpeed;
    pickColor();
    increaseSize();
    changeRotation();
  } else if (y - h/2 <= 0) {
    y = h/2;
    ySpeed = -ySpeed
    pickColor();
    increaseSize();
    changeRotation();
  }

  //ispirazione 
  fill(255);
  textAlign(CENTER, BOTTOM);
  textSize(16);
  textFont("Courier");
  text("Sketch basato sul tutorial Bouncing DVD Logo di Daniel Shiffman", width / 2, height - 20);
}
