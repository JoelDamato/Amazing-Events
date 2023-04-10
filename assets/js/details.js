const todosLosEventos = eventos.eventos

let urlLocation= location.search
let params= new URLSearchParams(urlLocation)
console.log(params)
let id = params.get('id')


let eventosFiltrados= todosLosEventos.find(evento => evento.name.replace(/ /g, "") == id)

console.log(eventosFiltrados)

const cardDetails=document.getElementById('contenedorDetail')

cardDetails.innerHTML=imprimirDetail(eventosFiltrados)

function imprimirDetail(evento){
return `<div class="d-flex justify-content-center mt-5 mb-5 card" style="width: 80%; min-height: 66vh;">
<div class="d-flex justify-content-center row g-0">
  <div class="col-md-4">
    <img src="${evento.image}" class="paginaDeDetails" alt="..." style="width:100%; height: 100%;">
  </div>
  <div class="col-md-6">
    <div class="ms-3 card-body ">
      <h2 class="card-title">${evento.name}</h2>
      <p class="card-text">
        <ul>
        <li>Date: ${evento.date} </li>
        <li>Category: ${evento.category}</li>
        <li>Place: ${evento.place}</li>
        <li>Capacity: ${evento.capacity}</li>
        <li>Assistance or estimate: ${evento.assistance}</li>
        <li>Price: ${evento.price}</li>
        <li>Description:${evento.description}</li>
      </ul>
    </div>
  </div>
</div>
</div>
`
}





