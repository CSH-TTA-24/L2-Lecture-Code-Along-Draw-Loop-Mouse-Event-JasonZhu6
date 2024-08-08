function setup() {
  noStroke()
  createCanvas(500, 500);
  background(0, 0, 0);

  let xPos = random(0, 501);
  let yPos = random(0, 501);
  ellipse(xPos, yPos, 25, 25);
}

// function draw() {
//   let r = random(0, 256); 
//   let g = random(0, 256); 
//   let b = random(0, 256); 

//   let xPos = random(0, 501); 
//   let yPos = random(0, 501);

//   fill(r, g, b)
//   ellipse(mouseX, mouseY, 25, 25);
// }

// function mouseClicked() {
//   let r = random(0, 256);
//   let g = random(0, 256);
//   let b = random(0, 256);

//   // let xPos = random(0, 501);
//   // let yPos = random(0, 501);

//   fill(r, g, b)
//   ellipse(mouseX, mouseY, 25, 25);
// }