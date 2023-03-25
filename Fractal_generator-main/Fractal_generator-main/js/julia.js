// setting up the canvas for fractal
function setup() {
  createCanvas(400, 400);
  background("black");
}

// function to color each pixel of canvas
function generate( ){
  // Taking input of the imaginary Y and Y
  imgX = document.getElementById("imgX").value;
  imgY = document.getElementById("imgY").value;

  console.log(imgX);
  console.log(imgY);

  for(var i=0;i<width;i++){
      for(j=0;j<height;j++){
          if(isjuliaset(i,j)){ // checking it the point sastisfies julia set or not     
              stroke(255); // white 
              point(i,j);
          }
          else{
              stroke(0); // black
              point(i,j);
          }
      }
  }
  if(ct==values.length-1){
      ct=0
  }
  else{
      ct++;
  }
  
}

// function to check if the point is in julia set or not
function isjuliaset(x,y){ 
  var mx = 50;
  var sx = map(x,0,width,-2,2);
  var sy = map(y,0,height,-2,2);
  var i=0;

  while(i<mx){ 
    // main equation for the fractal
      var real = sx*sx-sy*sy+values[ct].x;
      var imag = 2*sx*sy+values[ct].y;
      sx = real; 
      sy = imag;
      if(sx*sx+sx*sy>4) {
          return false;
      }
      else{
          i++;
      }
  }
  return true;
}

const values=[
  {x:0.35,y:0.15},{x:-0.74,y:0.11},{x:0.25,y:0.01},{x:0.35,y:0.11},{x:0.25,y:0.2},{x:0.25,y:0.55},{x:0.2,y:0.55},{x:-0.2,y:0.55},{x:-0.4,y:0.15},{x:-0.75,y:0.11}
]
var ct=0;

// function for Downloading the Fractal as image
  function downloadCanvas(){  
    // getiing canvas data  
    var image = canvas.toDataURL();  
    console.log(image);
  
    // create temporary link  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 'Julia_Fractal.png'; // set the name of the download file 
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
    pdf.save("Julia_Fractal.pdf"); // downloading pdf
  }
  