#   FRACTAL GENERATOR

• site link - https://hirenachhaada.github.io/Fractal_generator/index.html

•	This a user interactive fractal generating website that generates different types of fractals based on user inputs along with the ability to download the fractal       image as png or in pdf format.
•	For any querry and bug reports , conatct 9931715052, 7004482646
  Or email us at kumar610nityanand@gmail.com , ashutoshksingh2003@gmail.com 

#  Features

•	First of all we have a home page that asks user about the type of fractal he/she wants to generate, it also contains links to about us and conatact pages               [index.html]
•	We have the following types of fractals :  Fractal tree, newton’s fractal , Mandelbrot, Julia and we have a random fractal generator also
•	This repo contains html and javascript files for each of the fractal [fractaltree.js] ,[fractaltree.html], [newton.js] , [newton.html], [Mandelbrot.js],               [Mandelbrot.html], [Julia.js], [Julia.html] , [random.js] , [random.html]  , and the corresponding css files for all fractal and other pages
•	User can generate different fractals by giving certain inputs based on the type of the fractal.
•	User can also download all the fractal generated in png as well as in pdf format.
•	Following are the type of fractals and some brief descriptions of it. 

##  Fractal tree
•	In this user have to give the following inputs for generating fractal: angle, left and right length ratio for consecutive iterations, and no of iterations he/she       needs. 
•	It generates a fractal by using a recursive function that rotates the initial line by the angle provided and decreases the left and right length by the given           respective ratio. The recursive function runs till the length is greater than the given iteration. 
•	We are then drawing the fractal on a canvas sheet using the p5.js library, colors used are black and white.

## Newton Fractal
•	In the newton fractal we are asking the user for the number of iteration to be performed.
•	Here based on the number of iteration the fractal will be generated changing the angle and all measures accordingly.
•	it is mainly generated in two types basin and angle
•	The main colours used in this fractal are RED, GREEN, BLUE

## Mandelbrot Fractal
•	The Mandelbrot set is the set of complex number c for which the function FC(z) = z2 + c does not diverge to the infinity and we iterated from z=0 i.e the sequence      for FC(0) , FC(FC(0)), ..
•	The above recursion process goes upto 100 times.
•	Here, the users need to enter the width and height of the fractal and accordingly the fractal will compress or expand and generate different patterns.

## Julia Fractal 
•	The Julia set is associated with those points z = x + iy on the complex plane for which the series does not tend to infinity and the value of the mod(z) is always      less than 4
•	c is a complex constant, one gets a different Julia set for each different .
•	The real and imaginary value of the complex C is taken from user and accordingly different fractal are generated.
•	Julia was interested in the iterative properties of a more general expression.


##  Random tree
•	In this user can just generate a random fractal and enjoy in just one click.
•	It generates a random fractal by a recursive function on a line which automatically generates an angle, the next recursive length(left and right)  and other            parameters needed by using math.random() function and canvas functions .
•	We are then drawing the fractal on a canvas sheet given by canvas tag by html5, colors used are black and white.




