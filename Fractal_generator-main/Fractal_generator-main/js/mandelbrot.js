// setting up the canvas for fractal
function setup() {
    createCanvas(400, 400);
    background(0,0,0);
}

// declaring variable for inputs 
var wi
var hi


function generate(){
  // Taking input of width and height
    wi = document.getElementById("width").value
    hi = document.getElementById("height").value
}

// Define the function to generate the fractal  ( colorin geach pixel)
function draw() {
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      // equation for the mandelbrot 
      var c_re = (x - width / 2.5) * (wi) / width;
      var c_im = (y - height / 2.0) * (hi) / width;
      var Z_re = c_re, Z_im = c_im;
      var isInside = true;
      for (var n = 0; n < 100; n++) {
        var Z_re2 = Z_re * Z_re, Z_im2 = Z_im * Z_im;
        if (Z_re2 + Z_im2 > 4) {
          isInside = false;
          break;
        }
        Z_im = 2 * Z_re * Z_im + c_im;
        Z_re = Z_re2 - Z_im2 + c_re;
      }
      if (isInside) {
        // Giving Colour to Every point
        stroke(255);
                point(x,y);
      } else {
        stroke(0);
                point(x,y);
      }
    }
  }
}

// Code for Downloading as the image
function downloadCanvas(){  
  // get canvas data  
  var image = canvas.toDataURL();  
  console.log(image);

  // create temporary link  
  var tmpLink = document.createElement( 'a' );  
  tmpLink.download = 'Mandelbrot_Fractal.png'; // set the name of the download file 
  tmpLink.href = image;  

  // temporarily add link to body and initiate the download  
  document.body.appendChild( tmpLink );  
  tmpLink.click();  
  document.body.removeChild( tmpLink );  
}

// Code for Downloading as the pdf
function download_pdf(){
  // getting canvas image data
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var pdf = new jsPDF();

  pdf.addImage(imgData, 'JPEG', 0, 0);
  console.log(pdf);
  pdf.save("Mandelbrot_Fractal.pdf"); //downloading pdf

}