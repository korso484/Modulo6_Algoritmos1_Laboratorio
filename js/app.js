const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

//Entrada
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lapiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
]

//Creamos HTML dinámico
var ol = document.createElement("ol");
ol.setAttribute("class", "orderL");

var main = document.getElementById("principal");
main.appendChild(ol);

function calcularCosteItem(tag, unit){
    var resultadoItem = tag * unit;
    return resultadoItem;
}



var contadorId = 1;
for(var product of products){
    var li = document.createElement("li");
    li.innerHTML = product.description + ("- ") + product.price + ("€/ud.");
    var input = document.createElement("input");
    input.setAttribute("class", "product_unit");
    input.setAttribute("type", "number");
    input.setAttribute("id", "input_" +contadorId);
    input.setAttribute("value", 2);
    input.addEventListener("change", event => product.units = event.target.value);
    li.appendChild(input);
    ol.appendChild(li);
    var resul = calcularCosteItem(product.price, input.value);
    console.log(resul);
    contadorId++;
}

function isNumber(op){
    
}


























/*var costeTotal = 0;
var contador = 0;
function precioParcial(){
    for(var product of products){
        var valor = document.getElementById(input.getAttribute("id")).value; 
        console.log(valor);
        var costeParcial = calcularCosteItem(product.price, valor);
        costeTotal = costeParcial + costeTotal;
        return costeTotal; 
    }
    console.log(costeTotal);
    
}*/

//document.getElementById("boton").addEventListener("click", precioParcial);


