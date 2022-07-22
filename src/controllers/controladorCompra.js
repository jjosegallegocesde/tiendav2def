let producto=JSON.parse(localStorage.getItem('infoProducto'))

import {personalizarProducto} from './controladorPersonalizarProducto.js'
personalizarProducto(producto)

let carrito=[]
if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"))
}


import {pintarPildora} from './controladorPildora.js'
if(localStorage.getItem("cantidad")!=null){
    pintarPildora(localStorage.getItem("cantidad"))
}

import {contarProductos} from '../helpers/efectuarCompra.js'


let botonagregar=document.getElementById("botonAgregarcarrito")
botonagregar.addEventListener("click",function(evento){

    let cantidad=document.getElementById("cantidad").value
    producto.cantidad=cantidad

    carrito.push(producto)
    localStorage.setItem("carrito",JSON.stringify(carrito))
   
    let cantidadTotal=contarProductos(carrito)
    localStorage.setItem("cantidad",cantidadTotal)


    pintarPildora(localStorage.getItem("cantidad"))
    
    
})

