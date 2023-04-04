let listaProductos =[
    {id: 1, nombre: "GTX 1660 SUPER", descripcion: "Placa de video de gama media. Esideal para gaming y trabajo", precio: 200000 , cantidad: 1,alt: "imagen GTX 1660", img:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/gigabyte_gv_n4090aero_oc_24gdc_geforce_rtx_4090_aero_1680100231_1756225.jpg" },
    {id: 2, nombre: "RTX 3060", descripcion: "Placa de video de gama media. Esideal para gaming y trabajo", precio: 280000 , cantidad: 1,alt:"imagen RTX 3060" },
    {id: 3, nombre: "RTX 3070", descripcion: "Placa de video de gama media. Esideal para gaming y trabajo", precio: 320000 , cantidad: 1,alt:"imagen RTX 3070" },
    {id: 4, nombre: "RTX 2060", descripcion: "Placa de video de gama media. Esideal para gaming y trabajo", precio: 250000 , cantidad: 1,alt:"imagen RTX 2060" },
    {id: 5, nombre: "Radeon 6600", descripcion: "Placa de video de gama media. Esideal para gaming y trabajo", precio: 220000 , cantidad: 1,alt:"imagen RADEON 6600" },
    {id: 6, nombre: "Radeon 6900 XT", descripcion: "Placa de video de gama media. Esideal para gaming y trabajo", precio: 400000 , cantidad: 1,alt: "imagen RADEON 6900XT"},
    {id: 7, nombre: "RX 580", descripcion: "Placa de video de gama media. Esideal para gaming y trabajo", precio: 160000 , cantidad: 1,alt:"imagen RX 580" },
    {id: 8, nombre: "RX 570", descripcion: "Placa de video de gama media. Esideal para gaming y trabajo", precio: 140000 , cantidad: 1,alt:"imagen RX 570" }
   ]

const arrayEnFormatoJson= JSON.stringify(listaProductos)
localStorage.setItem("listaProductos", arrayEnFormatoJson)