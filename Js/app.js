class productoController {
    constructor() {
        this.listaProductos = []
    }

    leerProductos() {
        let obtenerListaJson = localStorage.getItem("listaProductos")

        if (obtenerListaJson) {
            this.listaProductos = JSON.parse(obtenerListaJson)
        }


    }
    mostrarEnDom(contenedor__productos) {
        contenedor__productos.innerHTML = ""
        this.listaProductos.forEach(producto => {

            contenedor__productos.innerHTML += ` 
            <div class="card card text-center mb-3" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${producto.descripcion}</li>
                        <li class="list-group-item">${producto.precio}</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                <div class="card-body">
                    <a href="#" class="card-link btn btn-primary" id="placas_video ${producto.id}">Añadir al Carrito</a>            
                </div>
            </div>
            `
        })
    }
}
class carritoController {
    constructor() {
        this.listaCarrito = []

    }
    leerCarrito() {
        let obtenerListaJson = localStorage.getItem("listaCarrito")

        if (obtenerListaJson) {
            this.listaCarrito = JSON.parse(obtenerListaJson)
        }
    }

    anadirProducto(producto) {
        this.listaCarrito.push(producto)
        let arrayFormatoJSON= JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito",arrayFormatoJSON)
    }
    mostrarEnDom(contenedor__carrito){
        contenedor__carrito.innerHTML= ""
        this.listaCarrito.forEach(producto => {
            contenedor__carrito.innerHTML += `
       <div class="card mb-3" style="max-width: 540px;">
           <div class="row g-0">
                <div class="col-md-4">
                   <img src="..." class="img-fluid rounded-start" alt="...">
               </div>
               <div class="col-md-8">
                       <div class="card-body">
                           <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text"> $${producto.precio}</p>
                           <p class="card-text"><small class="text-body-secondary">Last updated 3 mins
                               ago</small></p>
                       </div>
                </div>
            </div>
        </div>`
        })
    }
}




/* verificacion Storage */
const controladorProductos = new productoController()
controladorProductos.leerProductos()
const controladorCarrito = new carritoController()
controladorCarrito.leerCarrito


/* DOM */
const contenedor__productos = document.getElementById("contenedor__productos")
const contenedor__carrito = document.getElementById("contenedor__carrito")



controladorProductos.mostrarEnDom(contenedor__productos)
controladorCarrito.mostrarEnDom(contenedor__carrito)

controladorProductos.listaProductos.forEach(producto =>{
   const  productoEsperando= document.getElementById(`placas_video ${producto.id}`)
   
   productoEsperando.addEventListener("click", ()=>{
    controladorCarrito.anadirProducto(producto)   
    controladorCarrito.leerCarrito()    
 controladorCarrito.mostrarEnDom(contenedor__carrito)
   })
})


/*    listaCarrito.forEach(producto =>{
       contenedor__carrito.innerHTML += `
       <div class="card mb-3" style="max-width: 540px;">
           <div class="row g-0">
                <div class="col-md-4">
                   <img src="..." class="img-fluid rounded-start" alt="...">
               </div>
               <div class="col-md-8">
                       <div class="card-body">
                           <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text"> $${producto.precio}</p>
                           <p class="card-text"><small class="text-body-secondary">Last updated 3 mins
                               ago</small></p>
                       </div>
                </div>
            </div>
        </div>`
   })

  })
}) */



/* {
    this.listaCarrito.forEach(producto => {
        contenedor__carrito.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
             <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                         <p class="card-text"> $${producto.precio}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins
                            ago</small></p>
                    </div>
             </div>
         </div>
     </div>`
    
    
    })
} */