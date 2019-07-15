let bn = 3;//box number
let bs = 80;//box size
let bm = 140;//box margin
let buruburu = 0.01 ;

function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
  // buruburu = buru * cos(frameCount/1);
  // background(255);
  background(20, 20, 45);

// box color
  stroke(255);
  // strokeWeight(3);
  fill(0,0,0,180*cos(frameCount/25))
  // noFill()
  // rotateX(random(-0.01,0.01));
  // rotateY(random(-0.01,0.01));
  // rotateX(frameCount/30);
  // rotateY(frameCount/30);
  // rotateZ(frameCount/30);
   for (var ix = 0; ix < bn; ix++) {
    let x = (ix - 0.5 * bn + 0.5) * bm;
    for (var iy = 0; iy < bn; iy++) {
      let y = (iy - 0.5 * bn + 0.5) * bm;
      for (var iz = 0; iz < bn; iz++) {
        let z = (ix - 0.5 * bn + 0.5) * bm;

          push();
            rotateX(random(-1*buruburu,buruburu));
            rotateY(random(-1*buruburu,buruburu));
            rotateZ(random(-1*buruburu,buruburu));
            translate(x,0);
            translate(0,y);
            translate(0,0,bm*iz);
            // translate(0,0,(bm * iz)-200);
            box(bs+1*cos(frameCount/random(25)));
          pop();
        }
      }
    }
  // bs= bs+1;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


