// setting up the canvas for fractal
function setup() {
    createCanvas(500, 500);
    background("black");
  }
  
  function draw() {
    stroke(255);
    translate(200, 400);
  }

  // function to generate fractal 
  function generate() {
    createCanvas(500, 500);

    // taking user inputs  from html
    var left = document.getElementById("left").value;
    var right = document.getElementById("right").value;
    var angle = document.getElementById("angle").value;
    var iteration = document.getElementById("iteration").value;


    background("black");
    stroke(255);
    translate(260, 400);

    // recursive call 
    if (iteration >= 0) drawFractalTree(100, left, right, angle, iteration);
    else {
      // if the input by user is not correct 
      alert("Iteration Should be greater than 0");
    }
  
  }


  function drawFractalTree(len, left, right, angle, iteration) {
    line(0, 0, 0, -len); // starting line
    translate(0, -len);
    if (len > iteration) {

      // iteration
      push();
      rotate(PI / angle); // angle
      drawFractalTree(len * right, left, right, angle, iteration);
      pop();
      push();

      // Rotating the Stroke by the amount enter by the user
      rotate(-PI / angle);
      drawFractalTree(len * left, left, right, angle, iteration);
      pop();
    }
  }
  // Code for Downloading the Fractal as the Image
  function downloadCanvas(){  
    // get canvas data  
    var image = canvas.toDataURL();  
    console.log(image);
  
    // create temporary link  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 'Fractal_tree.png'; // set the name of the download file 
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
    pdf.save("Fractal_tree.pdf");// downloading pdf
  }
  