const contenedorDeEventos= document.getElementById('mainDeUpComing')

const todosLosEventos = []

const fecha=eventos.fechaActual

console.log(eventos.fechaActual)

for (let evento of eventos.eventos ){
    if(fecha<evento.date)
    todosLosEventos.push(evento)
}


const evento= todosLosEventos[0]


let cards =``
for(let evento of todosLosEventos){
cards += crearEvento (evento)
}

function crearEvento(evento){
return `<div class="card d-flex justify-content-center mt-2 h-50" style="width: 18rem;">
<img src="${evento.image}" class="card-img-top p-1" alt="Coming soon">
<div class="card-body d-flex flex-column justify-content-center ">
<h5 class="card-title">${evento.name}</h5>
<p class="card-text fs-5">${evento.description}</p>
<div class=" d-flex flex-row justify-content-between">
<p> Price: ${evento.price} </p>
<a href="./pages/details.html" class="btn vermas btn-dark">Ver más..</a>
</div>
</div>
</div>`
}

contenedorDeEventos.innerHTML = cards

console.log(document.getElementById('mainDeUpComing'))



