/*console.log(sucursalDelMes(1,2019));"Centro"
const ventaNueva = document.getelement.byId("botonVenta")
const nuevaVenta = (ventaNueva) =>{
    ventas.push(ventaNueva)
    ventaNueva.id = venta.length
    return ventas
}
console.log(nuevaVenta({
    fecha:new Date(2019,0,12),
    nombreVendedora:"Grace",
    sucursal:"caballito",
    componentes:["Monitor GPRS 3000"],
),)}
ventaNueva.addEventListener("click")
allSellect{}
querySelect()*/
/*document.addEventListener('DOMContentLoaded' , () => {
function openModal($el){
  $el.classList.add('is-active');
}
function closeModal($el){
  $el.classList.remove('is-active');
}
function closeAllModals(){
  (document.querySelectorAll('.modal')||[]).forEach(($modal)=>{
    closeModal($modal);
  });
}
})
//add a click event on buttons to open a specific modal
(document.querySelectorAll('.js-modal-trigger')|| []).forEach(($trigger)=>{
  const modal = $trigger.dataset.target;
  const $target = document.getElementById(modal);
  console.log($target);
  $trigger.addEventListener('click', ()=>{
    openModal($target);
  });

const openAddModalButton = document.getElementById('modal');

const addModal = document.getElementById('add-modal');
const editModal = document.getElementById('edit-modal');
const deleteModal = document.getElementById('delete-modal');

openAddModalButton.onclick= () => {
    addModal.style.display ='block';
}

const addModalCancelBtn = document.getElementById('add-modal-cancel-btn');

addModalCancelBtn.onclick= () => {
    addModal.style.display ='none';
}

// Add a click event on various child elements to close the parent modal
(
  document.querySelectorAll(
    '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
  ) || []
).forEach(($close) => {
  const $target = $close.closest('.modal');

  $close.addEventListener('click', () => {
    closeModal($target);
  });
});

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
  const e = event || window.event;

  if (e.keyCode === 27) {
    // Escape key
    closeAllModals();
  }
});
});*/
//mapeo de componentes
//document.getElementById('select-option').innerHTML = ventas.map(function(ventas)){
//return //`${ventas}`
document.addEventListener('click', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});
//mapeo de ventas
document.getElementById('sales-table').innerHTML = ventas.map(function itemVenta(venta) {
  const day = venta.fecha.getDate()
  const month = venta.fecha.getMonth() + 1
  const year = venta.fecha.getFullYear()

  const price = precioMaquina(venta.componentes)
  
  return `<tr>
          <td>${day}/${month}/${year}</td>
          <td>${venta.nombreVendedora}</td>
          <td>${venta.sucursal}</td>
          <td>${venta.componentes}</td>
          <td>${price}</td>
          <td>
          <i class="fas fa-pencil-alt has-text-success px-3 iconcss"></i>
          <i class="far fa-trash-alt has-text-danger px-2 iconcss"></i>
          </td>
      </tr>`
}).join('')

const setOptionSelectedMultiple = (element, optionsToSelect) =>{
  const options = element.options
  for (const index in options) {
    const option = options[index];
    if(optionsToSelect.includes(option.value)){
      option.selected = true
    }
  }
}


const ventasVendedoraSinFecha = (vendedoras) =>{
  let vendedoraMax = []
  for(const vendedora of vendedoras){
      vendedoraMax.push({ nombre: vendedora , total: ventasVendedora(vendedora)})
  }
  let nombreVendedora = ""
  let total = 0 
  for(const vendedora of vendedoraMax){
      if(vendedora.total >= total){
          nombreVendedora = vendedora.nombre
          total = vendedora.total
      }
  }
  return nombreVendedora
}
console.log(ventasVendedoraSinFecha( vendedoras))


//---Vendedora que más ingresos generó ---

document.getElementById('vendedora-ingresos').innerHTML = ventasVendedoraSinFecha (vendedoras)
z

// Get the modal
/*let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/
//VENTAS POR SUCURSAL
const tablaPorSucursal = document.getElementById