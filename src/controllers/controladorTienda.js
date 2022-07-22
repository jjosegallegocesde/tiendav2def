//Se traen los datos de los productos (consultar la bd)
import {productosBD} from '../helpers/baseDatos.js'

//llamamos al metodo encargado de aplicar traversing y pintar la tienda
import {pintarProductos} from './controladorPintar.js'
pintarProductos(productosBD)

//llamamos al metodo encargado de buscar productos por texto coincidente
import {buscarProductos} from './controladorBuscar.js'
buscarProductos()

//escuchamos clic en el contenedor padre de la tienda
let contenedor=document.getElementById("fila")
import {ampliarInfoProducto} from './controladorAmpliarInfo.js'
contenedor.addEventListener("click",function(evento){
    let producto=ampliarInfoProducto(evento)  
    //ALMACENAR EN EL LOCALSTORAGE LA INFORMACION DEL PRODUCTO SELECCIONADO
    localStorage.setItem('infoProducto',JSON.stringify(producto))
    //abro nueva ventana
    window.location.href="./src/views/ampliarInfo.html"

})

import {pintarPildora} from './controladorPildora.js'
if(localStorage.getItem("cantidad")!=null){
    pintarPildora(localStorage.getItem("cantidad"))
}
