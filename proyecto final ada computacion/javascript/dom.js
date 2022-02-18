const nuevaVenta = document.getElementById("#nuevaVenta");
const modalNuevaVenta = document.getElementById("#modal-activ");
const btncancelar = document.getElementById(".btncancelar");
const editarVenta = document.querySelector(".modal-editar");
const btnCancelEdicion = document.querySelector(".cancelar-edicion");
const modalEditarVenta = document.querySelector(".modal-editar");
const eliminarVenta = document.querySelector("#eliminar");
const btnCancelVenta = document.querySelector("#cancelarVenta");
const modalEliminarVenta = document.querySelector("#modal-eliminar");

const $ = (id) => document.getElementById(id);
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".open-modal")[0];
let modal = document.querySelectorAll("modal")[0];
let modalc = document.querySelectorAll(".modal-container")[0];
abrir.addEventListener("click",function(e){
  e.preventDefault();
  modalc.getElementsByClassName.opacity = "1";
  modalc.getElementsByClassName.visity="visible";
  modal.classList.toggle("modal-close");

});
cerrar.addEventListener("click",function(){
  modal.classList.toggle("modal-close");
 
  setTimeout(function(){
 modalC.style.opacity="0";
  modalC.style.visity="hidden";
  },1000)
})

window.addEventListener("click",function(e){
  this.console.log(e.target)
  if(e.target==modalC){
    
  }
})
function myFunction() {
  document.getElementById("demo").innerHTML = "container-modal";
}
myFunction();

const container = document.querySelector('.myModal')
const div = document.getElementById('div')
container.addEventListener('click', e =>{
   return e.target.classList.container('favorite styled')
})
const btn = document.querySelector('favorite styled')
const bgSuccess = document.querySelector('.modal')
btn.addEventListener('click', () =>{console.log('click boton')})
bgSuccess.addEventListener('click', () =>{console.log('clik bgSuccess')})
//nueva venta

/*nuevaVenta.addEventListener("click", () => {
  modalNuevaVenta.innerHTML.toggle("modal-activ");
});

btncancelar.addEventListener("click", () => {
  modalNuevaVenta.innerHTML.toggle("myModal");
});*/


//a

const buscarId = (id)=> ventas.find(venta => venta.id == id)
const buscarIndiceId = (id)=> ventas.findIndex(venta => venta.id == id)


//b

const edicionVenta =(venta)=>{
  
  $('nombreVendedoraEdit').value = venta.nombreVendedora
  $('sucursalEdit').value = venta.sucursal
  $('idEdit').value = venta.id

  const day = ("0" + venta.fecha.getDate()).slice(-2)
  const month = ("0" + (venta.fecha.getMonth() + 1)).slice(-2);
  
  $('fechaEdit').value = `${venta.fecha.getFullYear()}-${month}-${day}`
 
 for (const optionDom of $('componentesEdit').options) {
   if(venta.componentes.findIndex(componente => componente === optionDom.value)!= -1){
      optionDom.selected = true
   }
 }
  }


  const guardarModalEditar =(e)=>{
   

    const nombreVendedora = $('nombreVendedoraEdit').value
    const componentes = obtenerValuesOptions($('componentesEdit'));
    const sucursal = $('sucursalEdit').value
    const fecha = new Date($('fechaEdit').value) 
    const id = $('idEdit').value

    const indice = buscarIndiceId(id)


    const ventasaEditar = {
      nombreVendedora,
      componentes,
      sucursal,
      fecha,
      id
    }

    ventas[indice] = ventasaEditar
    
    

    function (modal) {
      modalEditarVenta.classList.add("modal-activ");
      actualizarDom();

    }
  

  $('guardarEdit').addEventListener('click', guardarModalEditar)




const abrirModalEditar =(element)=>{
  modalEditarVenta.classList.toggle("modal-activ"); 
 const venta = buscarId(element.dataset.id);
 edicionVenta(venta)
}

const obtenerValuesOptions = (optionDom) => {
  const aux = [];
  for (const option of optionDom.options) {
    if (option.selected) {
      aux.push(option.value);
    }
  }
  return aux;
};

$("guardarNuevaVenta").addEventListener("click", () => {
  const nombreVendedora = $("agregarVendedora").value;
  const componentes = obtenerValuesOptions($("agregarComponente"));
  const sucursal = $("agregarSucursal").value;
  const fecha = new Date($("agregarFecha").value);
  const id = Math.floor(Math.random() * 10000) + 10;

  const ventasAGuardar = {
    id,
    nombreVendedora,
    componentes,
    sucursal,
    fecha,
  };

  ventas.push(ventasAGuardar);
 actualizarDom();
  modalNuevaVenta.classList.add("modal-activ");
});

 //eliminar venta
const abrirModalEliminar=(element)=>{
    modalEliminarVenta.classList.toggle("modal-activ");
    $('idEliminar').value = element.dataset.id
}

$btnCancelEdicion.addEventListener("click", () => {
  return $modalEditarVenta.classList.toggle("modal-activ");
});


$btnCancelVenta.addEventListener("click", () => {
  return $modalEliminarVenta.classList.toggle("modal-activ");
});


const eliminarVentaSeleccionada =(id)=>{
  ventas = ventas.filter(venta => venta.id != id)
 }

$('eliminar-venta').addEventListener("click", () => {
  $modalEliminarVenta.classList.toggle("modal-activ");

  const id = $('idEliminar').value

  eliminarVentaSeleccionada(id)
 actualizarDom() 

});
 //tabla 
 if (window.matchMedia("(max-width: 400px)").matches) {
  /* La pantalla tiene al menos 400 píxeles de ancho */
} else {
  /* La pantalla tiene menos de 400 píxeles de ancho */
}

//r tabla

const renderTabla = () => {
  const ventasTabla = ventas.reduce((acc, venta) => {
    return (
      acc +
      ` <tr>
            <td>${venta.fecha.toLocaleDateString
              ("es-AR", {
              timeZone: "UTC",
            })}     </td>
            <td>${venta.nombreVendedora}</td>
            <td>${venta.sucursal}</td>
            <td>${venta.componentes.join()}</td>
            <td>${precioMaquina(venta.componentes)}</td>
            <td>
                <i class="fas fa-pencil-alt editar" data-id="${
                    venta.id}" onclick="abrirModalEditar(this)"></i>
                <i class="fas fa-trash-alt eliminar" data-id="${
                    venta.id}" onclick="abrirModalEliminar(this)"></i>
            </td>
        </tr>
       
    `
    );

  }, `<tr>
  <th>Fecha</th>
  <th>Vendedora</th>
  <th>Sucursal</th>
  <th>Componentes</th>
  <th>Precio</th>
  <th>Acciones</th>
</tr>`);
  const tablaVenta = document.querySelector("#tablaVentas");

  tablaVenta.innerHTML = ventasTabla;
};

const renderSucursales = () => {
  const ventasXsucursalDom = sucursales.reduce((acc, sucursal) => {
    return (
      acc +
      `
    <tr>
        <td>${sucursal}</td>
        <td>${ventasSucursal(sucursal)}</td>
    </tr>
    `
    );
  }, "");

  const tablaVentasXsucursal = document.querySelector("#tdSucursal");

  tablaVentasXsucursal.innerHTML = ventasXsucursalDom;
};


const actualizarDom = () => {
  $("productoStefano").innerHTML = componenteMasVendido();
  $("vendedoraStefano").innerHTML = vendedoraQueMasVendio();
  renderTabla();
  renderSucursales();
};
actualizarDom();


//modal
/*document.addEventListener('click', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-activ');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-activ');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($myModal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(myModal);
      console.log($target);
  
      $trigger.addEventListener('onclick', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('onclick', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keysdown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });*/

 /* var exampleModal = document.getElementById('exampleModal')
  exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInput = exampleModal.querySelector('.modal-body input')
  
    modalTitle.textContent = 'New message to ' + recipient
    modalBodyInput.value = recipient
  })
  
  */

  
  const openEls = document.querySelectorAll("[data-open]");
  const isVisible = "is-visible";
   
  for(const el of openEls) {
    el.addEventListener("click", function() {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }

  const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}
document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});