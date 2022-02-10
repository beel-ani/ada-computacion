const vendedoras= ["Ada", "Grace", "Hedy", "Sheryl"],

const ventas= [
   [
     1,
     fecha=new Date(2019, 1, 4),
     nombre="Grace",
     "Centro",
     ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
   ],
   [
     2,
     new Date(2019, 0, 1),
     "Ada",
     "Centro",
     ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
   ],
   [
     3,
     new Date(2019, 0, 2),
     "Grace",
     "Caballito",
     ["Monitor ASC 543", "Motherboard MZI"],
   ],
   [
     4,
     new Date(2019, 0, 10),
     "Ada",
     "Centro",
     ["Monitor ASC 543", "Motherboard ASUS 1200"],
   ],
   [
     5,
     new Date(2019, 0, 12),
     "Grace",
     "Caballito",
    ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
   ],
 ]

 const articulo= [
   ["Monitor GPRS 3000",200] ,
   ["Motherboard ASUS 1500",120 ],
   ["Monitor ASC 543", 250 ],
   ["Motherboard ASUS 1200", 100 ],
   ["Motherboard MZI", 30 ],
   ["HDD Toyiva", 90 ],
   ["HDD Wezter Dishital", 75 ],
   ["RAM Quinston", 110 ],
   ["RAM Quinston Fury", 230 ],
 ],
//1 precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

const buscarArticulo = (articuloABuscar) =>{
    for (const articulo of articulos){
        if (articuloABuscar == articulo.item){
            return articulo.precio
        }
    }
    return 0;
};
const precioMaquina = (componentes) => {
    let precioTotal = 0;
    for (const componente of componentes){
        precioTotal+= buscarPrecioDelArticulo(componente);
    }
    return precioTotal
};
console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)


//2cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió.
// La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.
const cantidadVentasComponente = (componenteABuscar) => {
    //primer paso recorrer ventas
    //segundo paso buscar componente en componentes
    //si existe sumo 1
    let contador = 0 
    for (const venta of ventas){
        contador += venta.componente.filter(componente=>componente == componenteABuscar).length
    for (const venta of ventas.componentes){
        if (componente ==componenteABuscar){
            contador ++
        }
    }
    return contador
}
console.log(cantidadVentasComponente('Monitor ASC 543'));

const cantidadVentasComponente1=(componenteABuscar) =>{
    let contador = 0
    for (const venta of ventas){
        contador += venta.componente.filter(componente == componenteABuscar).length
    }
    return contador
}
console.log(cantidadVentasComponente1('Monitor ASC 543'));


//3vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes.
// O sea no cantidad de ventas, sino importe total de las ventas. 
//El importe de una venta es el que indica la función precioMaquina. 
//El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
const ventasPorFecha =(mes,anio)=>{
    return ventas.filter((venta) => (mes-1) == venta.fecha.getMounth() && anio == venta.fecha.getFullYear());
};
console.log(ventasPorFecha(2, 2019));
console.log(ventasPorFecha(2, 2019));
console.log(ventasPorFecha(1, 2019));

const vendedoraDelMes = (mes, anio) => {};
console.log(vendedoraDelMes(1, 2019));
// ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, anio) => {
    let componentesFiltrados = []
    const componentesVendidos = ventasPorFecha(mes, anio)
    for(const componenteVendido of componentesVendidos){
        componentesFiltrados.push(componenteVendido.componentes)
    }
    let componentesFiltradosJoin = componentesFiltrados.join().split(',')
    
    return precioMaquina(componentesFiltradosJoin)
}
console.log(ventasMes(1, 2019)); // 1250
 
// ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).


console.log(ventasMes(1, 2019)); // 1250

ventasVendedora(nombre); 
//Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
//const ventasVendedora = (nombre) =>{
   // let sumaPrecio = 0
   // for (const venta of ventas){
      //  if(venta.nombreVendedora === nombre){
            sumaPrecio += precioMaquina(venta.componentes)
      //  }
    //}
    //return sumaPrecio
//}
const ventasDos = (parametro) =>{
    let totalParametro = 0
    for(const venta of ventas){
        if(venta.vendedora === parametro){
            totalParametro += precioMaquina(venta.componentes)
        }if (venta.sucursal === parametro){
            totalParametro += precioMaquina(venta.componentes)
        }if (venta.sucursal === parametro){
            totalParametro += precioMaquina(venta.componentes)
        }
    }
    return totalParametro
}

console.log(ventasVendedora('Grace')); // 900

//componenteMasVendido():
// Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
const componenteMasVendido = () =>{
    let componentesVendidos = []
    for (const articulo of articulos){
        componentesVendidos.push({cantidad:cantidadVentasComponente(articulo.item), nombre: articulo.item})
    }
    
    //console.log(componentesVendidos)
    let auxiliarCantidad = 0 
    let auxiliarNombre = ""
    for (const componenteVendido of componentesVendidos){
        if(componenteVendido.cantidad > auxiliarCantidad) { 
            auxiliarCantidad = componenteVendido.cantidad
            auxiliarNombre 

console.log(componenteMasVendido()); // Monitor GPRS 3000
// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const huboVentas = (mes, anio) => {
    let bandera = false
    for (const venta of ventas){
        if(((mes-1) == venta.fecha.getMonth()) && anio == venta.fecha.getFullYear() ){
            
            bandera = true
        }else {
            bandera = false
        }
    } 
    return bandera
}


console.log(huboVentas(1, 2019));//false
//Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
const ventasSucursal = (sucursal) =>{
    let componentesPorSucursal = []
    let totalSucursal = 0 
    for(const venta of ventas){
        if(venta.sucursal == sucursal){
            totalSucursal += precioMaquina(venta.componentes)
            //componentesPorSucursal.push(venta.componentes))
        }
    } 
    // for(const componentePorSucursal of componentesPorSucursal){
    //     totalSucursal += precioMaquina(componentePorSucursal)
    // }
    return totalSucursal
}




console.log(ventasSucursal('Centro')); // 990
//las funciones ventasSucursal y ventasVendedora tienen mucho codigo en comun,ya que es 
//la misma funcionalidad pero trabajando con una propiedad distinta.
//Entonces,¿cómo harias para que aambasfunciones reutilicen codigo y evitemos repetir?
const ventaDos = (propiedad, parametro) =>{
    let totalParametro = 0
    for (const venta of ventas){
        venta[propiedad] === parametro ? totalParametro += precio.maquina(venta.componentes)
        :totalParametro = totalParametro
    }
    return totalParametro
    
}
console.log(ventaDos("Sucursal", "Centro"))
//Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) 
//y devuelve el nombre de la sucursal que más vendió en plata en el mes. 
//No cantidad de ventas, sino importe total de las ventas. 
//El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
const sucursalDelMes=(mes, anio)=>{
    const filtroMesAnio = ventas.filter((venta)=>(mes-1) == venta.fecha.getMonth()&& anio == venta.fecha.getFullYear())
    let totalVentasMayor = 0
    let sucursalMayor = ""
    for (const sucursal of sucursales){
        const filtroSucursal = filtroMesAnio.filter((venta)=> sucursal == venta.sucursal)
        let totalVentas=0
        for (const venta of filtroSucursal){
            totalVentas+=precioMaquina(venta.componentes)
        }
        if (totalVentasMayor<=totalVentas){
            totalVentasMayor= totalVentas
            sucursalMayor = sucursal
        }
    }
    return sucursalMayor
}

console.log(sucursalDelMes(1, 2019)); // "Centro"

