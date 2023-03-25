  // getting canvas from html
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// getting canvas height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const maxLevel = 5;
const branches = 2;

// using random function to generate random parameters for fractal
const sides = Math.floor(Math.random() * 10 + 3);
const spread = Math.random() * 48 + 0.51;

ctx.translate(canvas.width / 2, canvas.height / 2);

const angle = Math.PI * 9 * spread;


// function to generate fractal in recursive manner
function drawLine(level) {

  if (level > maxLevel) return;

  // Giving appropriate colour to the point
  ctx.strokeStyle = "#fff";

  // starting line 
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(150, 0);
  ctx.stroke();

  for (let i = 1; i < branches + 1; i++) {
    ctx.save();
    ctx.translate((150 * i) / (branches + 1), 0);
    ctx.scale(0.5, 0.5);
    ctx.save();

    ctx.rotate(angle);
    drawLine(level + 1); // recursive call 
    ctx.restore();
    ctx.save();

    ctx.rotate(-angle);
    drawLine(level + 1);  // recursive call 
    ctx.restore();

    ctx.restore();
  }
}
for (let i = 0; i < 5; i++) {
  drawLine(0);
  ctx.rotate((Math.PI * 2) / 5);
}

// code for downloading the fractal as the image
function downloadCanvas(){  
  // get canvas data  
  var image = canvas.toDataURL();  
  console.log(image);

  // create temporary link  
  var tmpLink = document.createElement( 'a' );  
  tmpLink.download = 'Random_Fractal.png'; // set the name of the download file 
  tmpLink.href = image;  

  // temporarily add link to body and initiate the download  
  document.body.appendChild( tmpLink );  
  tmpLink.click();  
  document.body.removeChild( tmpLink );  
}
  // Code for downloading the fractal as pdf
function download_pdf(){
      // getting image info
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var pdf = new jsPDF();

  pdf.addImage(imgData, 'JPEG', 0, 0);
  console.log(pdf);
  pdf.save("Random_Fractal.pdf"); // downloading pdf

}
