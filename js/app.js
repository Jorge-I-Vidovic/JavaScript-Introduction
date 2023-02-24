// POO

// - Object Literal -

const producto = {
    nombre: 'Tablet',
    precio: 500
}

// - Object Constructor - 
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function(producto){
    return `${this.nombre} tiene un precio de: ${this.precio} €`;
}

function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(cliente){
    return `El cliente se llama ${this.nombre} ${this.apellido}.`;
}

const producto2 = new Producto('Monitor de 49"', 800);
const producto3 = new Producto('Laptop 15"', 500);
const cliente1 = new Cliente('Jorge','Vidovic')


console.log(producto2.formatearProducto() );
console.log(cliente1.formatearCliente())
