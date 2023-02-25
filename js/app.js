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


// POO
class Soldier {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const AuthenticatedUser = new Promise( (resolve,reject)=>{
    const auth = true;
    if(auth){
        resolve('Usuario autenticado.'); // El promise se cumple
    } else{
       reject('No se pudo iniciar sesión.');  // El promise no se cumple
    }
});

AuthenticatedUser
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})

// En los Promises existen 3 valores
// - Pending: La promesa no se ha rechazado ni aceptado, se encuentra a la espera.
// - Fullfilled: La promesa se cumplió.
// - Rejected: la promesa fue rechazada.
