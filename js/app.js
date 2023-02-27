const boton = document.querySelector('#boton');

boton.addEventListener('Click', ()=>{
    Notification.requestPermission()
    .then(result => console.log(`El resultado es ${result}`))
});

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación.');
}

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( ()=> {
            resolve('Los clientes fueron descargados.');
        }, 5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( ()=> {
            resolve('Los pedidos fueron descargados.');
        }, 3000);
    });
}

async function app(){
    try{
        //const result = await descargarNuevosClientes();
        //const pedidos = await descargarUltimosPedidos();

        const result = await Promise.all(
            [descargarNuevosClientes(), 
             descargarUltimosPedidos()]);
        console.log(result[0]);
        console.log(result[1]);
    } catch(error){
        console.log(error);
    }
}

app();

//------------------------------------------------------------------------------------------------

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

function obtenerEmpleados(){
    const archive = 'empleados.json';
    fetch(archive)
        .then(result =>  result.json())
        .then(data => {
            const { employes } = data;
            console.log(employes)
        })
}
obtenerEmpleados();