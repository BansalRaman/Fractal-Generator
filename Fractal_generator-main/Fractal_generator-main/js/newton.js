//Class for numbers a + bi
function complex(real, imag) {
    this.real = real;
    this.imag = imag;
  
    this.square = function () {
      var a = this.real;
      var b = this.imag;
      return new complex(a * a - b * b, 2 * a * b);
    };
  
    this.cube = function () {
      var a = this.real;
      var b = this.imag;
      return new complex(a * a * a - 3 * a * b * b, 3 * a * a * b - b * b * b);
    };
  
    this.abs = function () {
      var a = this.real;
      var b = this.imag;
      return Math.sqrt(a * a + b * b);
    };
  
    this.neg = function () {
      var a = this.real;
      var b = this.imag;
      return new complex(-1 * a, -1 * b);
    };
  
    // angle determinig function 
    this.angle = function () {
      var a = this.real;
      var b = this.imag;
      if (a >= 0) {
        var theta = Math.atan(b / a);
      } else {
        var theta = Math.atan(b / a) + Math.PI;
      }
      if (arguments[0] == "deg") {
        theta = (180 * theta) / Math.PI;
      }
      return theta;
    };
  }
  
  //Taking complex numbers (from the class "complex") as arguments and adding them
  function add() {
    var a = 0;
    var b = 0;
    for (var i = 0; i < arguments.length; i++) {
      a = a + arguments[i].real;
      b = b + arguments[i].imag;
    }
    return new complex(a, b);
  }
  
  //Taking complex numbers (from the class "complex") as arguments and multiplying them
  function multiply() {
    var a = arguments[0].real;
    var b = arguments[0].imag;
    for (var i = 1; i < arguments.length; i++) {
      var a2 = arguments[i].real;
      var b2 = arguments[i].imag;
      var aTemp = a;
      a = a * a2 - b * b2;
      b = aTemp * b2 + b * a2;
    }
    return new complex(a, b);
  }
  
  //takeing two complex numbers (from class "complex") as parameters and divides the first by the second
  function divide(comp1, comp2) {
    var a = comp1.real;
    var b = comp1.imag;
    var a2 = comp2.real;
    var b2 = comp2.imag;
    var aNew = (a * a2 + b * b2) / (a2 * a2 + b2 * b2);
    var bNew = (b * a2 - a * b2) / (a2 * a2 + b2 * b2);
    return new complex(aNew, bNew);
  }
  
  var xMin = -2;
  var xMax = -xMin;
  var yMin = -1;
  var yMax = 1;
  
  var position = new complex();
  var root1 = new complex(1, 0);
  var root2 = new complex(-0.5, Math.sqrt(3) / 2);
  var root3 = new complex(-0.5, (-1 * Math.sqrt(3)) / 2);
  
  // getting canvas from html
  var display = document.getElementById("display");
  var ctx = display.getContext("2d");
  
  // function to color each pixel
  function renderBasin(d1, d2, d3, x, y) {
    if (d1 < d2 && d1 < d3) {
      ctx.fillStyle = "#ff0000";
      ctx.fillRect(x, y, 1, 1);
    } else if (d2 < d3) {
      ctx.fillStyle = "#00ff00";
      ctx.fillRect(x, y, 1, 1);
    } else {
      ctx.fillStyle = "#0000ff";
      ctx.fillRect(x, y, 1, 1);
    }
  }
  
  function renderAngle(point, x, y) {
    var angle = point.angle("deg");
    ctx.fillStyle = "hsl(" + angle + ", 100%, 50%)";
    ctx.fillRect(x, y, 1, 1);
  }
  
  var generating = false;
  var stop = true;
  
  // function to check every point in newtons fractal condition 
  function generate(method) {
    function loop2() {
      setTimeout(function () {
        if (generating) {
          stop = true;
          loop2();
        } else {
          stop = false;
          generating = true;

          // Taking input of the iterations 
          var iterations = document.getElementById("iterations").value;
          var y = 0;
          loop1();
          function loop1() {
            setTimeout(function () {
              for (var x = 0; x < display.width; x++) {
                if (stop) {
                  break;
                }
                position.real = xMin + (x * (xMax - xMin)) / display.width;
                position.imag = yMin + (y * (yMax - yMin)) / display.height;
                for (var i = 0; i < iterations; i++) {
                  if (stop) {
                    break;
                  }
                  position = add(
                    position,
                    divide(
                      // Different Mathematical functions 
                      add(new complex(-1, 0), position.cube()),
                      multiply(new complex(3, 0), position.square())
                    ).neg()
                  );
                }
                var dist1 = add(position, root1.neg()).abs();
                var dist2 = add(position, root2.neg()).abs();
                var dist3 = add(position, root3.neg()).abs();

                // Generating as per the method choosen by the user
                if (method == "basin") {
                  renderBasin(dist1, dist2, dist3, x, y);
                } else if (method == "angle") {
                  renderAngle(position, x, y);
                }
              }
              y++;
              if (y < display.height && !stop) {
                loop1();
              } else {
                generating = false;
              }
            }, 0);
          }
        }
      }, 0);
    }
    loop2();
  }
  // Code for downloading as the image
  function downloadCanvas(){  
    // get canvas data  
    var image = display.toDataURL();  
    console.log(image);
  
    // create temporary link  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 'Newton_Fractal.png'; // set the name of the download file 
    tmpLink.href = image;  
  
    // temporarily add link to body and initiate the download  
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink );  
  }

  // Code for downloading the fractal as pdf
  function download_pdf(){
      // getting image info
    var imgData = display.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF();
  
    pdf.addImage(imgData, 'JPEG', 0, 0);
    console.log(pdf);
    pdf.save("Newton_Fractal.pdf");// downloading pdf
  
  }
  