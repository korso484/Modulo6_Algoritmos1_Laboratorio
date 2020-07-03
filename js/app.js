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


//Creamos los productos
function createProduct(product) {
    var li = document.createElement("li");
        li.innerHTML = product.description + (" - ") + product.price + ("€/ud.");
        var input = document.createElement("input");
        input.setAttribute("class", "product_unit");
        input.setAttribute("type", "number");
        input.setAttribute("id", "input");
        input.setAttribute("value", product.units);
        input.addEventListener("change", event => product.units = event.target.valueAsNumber);
        li.appendChild(input);
        ol.appendChild(li);       
}

//Iteramos y mostramos los productos
var showProducts = products => {
    for(var product of products){
        createProduct(product);
    }  
}



showProducts(products);

/*
//No he conseguido que funcione con éxito el habilitar/deshabilitar podrías indicarme cual es el problema¿?¿?¿?¿

var suma = 0;
var btnCalc = document.getElementById("boton");
function validateInput(){
    for( var i=0; i<products.length; i++){  
        if(products[i].units>0){
            suma += products[i].units;
        }else{
            console.log("NO Hay unidades");
        } 
    }
    if(suma>0){
        document.getElementById('boton').disabled = false; // Disabled
    }else{
        document.getElementById('boton').disabled = true; // Disabled
    }
}*/

            
//Calculamos los subtotales, impuestos y precio final
function obtenerFactura(){
    //validateInput();
    var precioIVA = 0;
    var precioSubtotal = 0;
    var precioTotal = 0;
    for(var i=0; i< products.length;i++){ 
        precioSubtotal +=  products[i].price * products[i].units;
        precioIVA += (products[i].price * products[i].units) * (products[i].tax/100);
    }
    precioTotal += precioSubtotal + precioIVA; 
    document.getElementById("subtotal").innerText = precioSubtotal.toFixed(2);
    document.getElementById("IVA").innerText = precioIVA.toFixed(2); 
    document.getElementById("TOTAL").innerText = precioTotal.toFixed(2);      
}


//Asociamos el evento al botón Calcular
document.getElementById("boton").addEventListener("click", obtenerFactura);






