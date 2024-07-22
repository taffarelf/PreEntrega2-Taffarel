//! Buscador de paquetes de viaje.

let usuario = prompt('Ingrese su nombre, por favor.')
console.log(`Bienvenidx ${usuario} a la web.`)
let viajes = prompt(`${usuario}, los viajes disponibles son: \n Cordoba \n Mendoza \n Salta \n Jujuy \n Bariloche \n Si desea recibir informacion sobre los paquetes de dias ingrese: 'Recibir'.`)
if(viajes == 'recibir') {
    alert('A continuacion enviaremos los paquetes de dias disponibles.')
} else {
    alert('Por favor ingrese "Recibir" si desea mas informacion.')
}

let data = {
    nombre: 'Fiorella',
    apellido: 'Taffarel',
    edad: 23,
    email: 'taffarelfiorella@gmail.com'
}
console.log(data)

const destinos = [
    {id: '01', nombre: 'Cordoba', precio: 32500},
    {id: '02', nombre: 'Mendoza', precio: 45000},
    {id: '03', nombre: 'Salta', precio: 50000},
    {id: '04', nombre: 'Jujuy', precio: 43000},
    {id: '05', nombre: 'Bariloche', precio: 65000},
];
destinos.forEach((destino) => {
    console.log(`El paquete hacia ${destino.nombre}, sale ${destino.precio}.`)
})

let paqueteDias = prompt('Ingrese el paquete de dias que desea adquirir. \n 7 dias \n 15 dias \n 20 dias.');

switch (paqueteDias){
    case '7 dias':
        console.log('7 dias disponibles. Mantiene el precio inicial.')
        break;
    case '15 dias':
        console.log('15 dias disponibles. Mantiene el precio inicial.')
        break;
    case '20 dias':
        console.log('20 dias disponibles. Se agrega un 10% de recargo al paquete inicial.')
        break;
    default:
        console.log(`${paqueteDias}, no se encuentra disponible para los viajes ofrecidos.`)
        break;
}

const combo = [{id: '001', nombre: 'Cordoba', precio: 32500}, {id: '002', nombre: 'Mendoza', precio: 45000}, {id: '003', nombre: 'Salta', precio: 50000}, {id: '004', nombre: 'Jujuy', precio: 43000}, {id:'005', nombre: 'Bariloche', precio: 65000}]
console.log(combo)

function asignarOperacion(op){
    if (op == 'sumarA') {
        return (a, b) => a + b
    } else if (op == 'sumarC') {
        return (c, d) => c + d
    } else if (op = 'sumarE') {
        return (e, f) => e + f
    } else if (op = 'sumarG') {
        return (g, h) => 'sumarG'
    } else if (op = 'sumarI') {
        return (i, j) => 'sumarI'
    }
}
let sumarA = asignarOperacion ('sumarA');
let sumarC = asignarOperacion ('sumarC');
let sumarE = asignarOperacion ('sumarE');
let sumarG = asignarOperacion ('sumarG');
let sumarI = asignarOperacion ('sumarI');

console.log(sumarA(32500, 4875), 'Cordoba - 10%')
console.log(sumarC(45000, 4500), 'Mendoza - 10%')
console.log(sumarE(50000, 5000 ), 'Salta - 10%')
console.log(sumarG(43000, 4300), 'Jujuy - 10%')
console.log(sumarI(65000, 6500), 'Bariloche - 10%')

function despedida (usuario) {
    alert(`${usuario}, se enviaran todos los datos por email. Muchas gracias por operar con nosotros.`)
}
despedida(usuario)