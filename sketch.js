let value = 0



function setup() {
  createCanvas(windowWidth, windowHeight);
  //background();
  guiSetup();
  
r = random(255);
g = random(255);
b = random(255);
  
  
  if (gui.draw);
  draw();
  
  background(0);
}

function draw() {
  
  rectMode(CENTER);
  
  fill(0);
  
  
  for (let i = 0; i < windowWidth; i+= gui.gridsize){
    for(let y = 0; y < windowHeight; y += gui.gridsize){
      //rect(i, y, 5, 5);
      
      
      var d = int(dist(mouseX, mouseY, i, y));
      if(mouseIsPressed && d < gui.weight){
        strokeWeight(1);
        stroke(gui.stroke);
        fill(gui.fill);
        rect(i, y, gui.gridsize, gui.gridsize);
      
      }
  }
}

}

function guiSetup(){
  gui = new Gui();
  let gui_setup = new dat.GUI();
  
  let gui_draw = 
gui_setup.addFolder('draw');
  gui_draw.add(gui, 'gridsize', 1, 100).step(1).onChange(update);
  gui_draw.addColor(gui, 'fill').onChange(update);
  gui_draw.addColor(gui, 'stroke').onChange(update);
  gui_draw.add(gui, 'weight', 4, 100).step(1).onChange(update);
  gui_draw.open();
  
}

function Gui(){
  this.fill = [255,0,0];
  this.stroke = [0,0,0];
  this.weight = 10;
  this.gridsize = 5;
}

function update(){
  redraw();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}