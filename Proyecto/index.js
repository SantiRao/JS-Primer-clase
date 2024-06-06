console.log('JScargado')

const boton1 = document.getElementById('boton1')
console.log(boton1)

//Eventos

//Manejador de un Evento (Handler)
const ejecutarevento = ()=>{
    console.log("click en boton")
}

const ejecutarevento2 = ()=>{
    // console.log("click en boton2")
    // contenedor1.textContent = 'Nuevo elemento del section'
    contenedor1.innerHTML = '<h2>Hola Titulo</h2>'
}

//Asignar un escuchador (listener)
boton1.addEventListener('click', ejecutarevento)

// 1. Referencias el contenedor
// 2. Crear boton2
// 3. Ponerlo a escuhcar
// 4. Crear una funcion

const contenedor1 = document.getElementById('contenedor1')
const boton2 = document.getElementById('boton2')

boton2.addEventListener('click',ejecutarevento2)