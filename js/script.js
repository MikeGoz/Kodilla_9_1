// Kodilla task 9.1

var a, h,
	triangleArea,
	error = 'Nieprawidlowe dane',
	triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(1, 5),
	triangle3Area = getTriangleArea(10, 0); // error value 

function getTriangleArea(a, h) {

	if (a > 0 && h > 0) {

		triangleArea = a * h / 2;
   		return triangleArea; 
   
	} else {
   		
   		return  error;
	}
}
console.log(getTriangleArea(10, 6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);