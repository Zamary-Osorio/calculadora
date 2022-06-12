function suma(a, b) {
    return a + b; 
}
const resultado = suma(3, 5);
console.log(resultado);

function resta(a, b = 4) {
    return a - b;
}
const total = resta(3);
console.log(total);

const multiplo = (a, b) => {
    return a * b;
}
const subtotal = multiplo(9, 8);
console.log(subtotal);


const division = function(a, b) {
    return a / b;
}
const totales = division(7, 4);
console.log(totales);    

function sustraccion(a, b, c, d, e, f, h) {
    return a - b - c - d - e - f - h;
}

const igual = sustraccion(1, 5, 8, 12, 4, 11, 5);
console.log(igual);