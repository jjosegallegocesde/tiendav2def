export function contarProductos(carrito){

    let numeroProductos=0
    carrito.forEach(function(producto){

        numeroProductos+=Number(producto.cantidad)

    })

    return numeroProductos

}