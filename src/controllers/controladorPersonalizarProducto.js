export function personalizarProducto(producto){

    let foto=document.getElementById("fotoproducto")
    foto.src=producto.foto

    let nombre=document.getElementById("nombreproducto")
    nombre.textContent=producto.nombre

    let descripcion=document.getElementById("descripcionproducto")
    descripcion.textContent=producto.descripcion

    let precio=document.getElementById("precioproducto")
    precio.textContent=producto.precio



}