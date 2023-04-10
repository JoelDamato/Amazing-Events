const contenedorDeEventos= document.getElementById('mainDeIndex')
const todosLosEventos = eventos.eventos

function imprimirEventos(parametro) {
    if (parametro.length === 0) {
    contenedorDeEventos.innerHTML = "NO HAY EVENTOS";
    } else {
      const nota = parametro.map(crearEvento).join("");
      contenedorDeEventos.innerHTML = nota;
    }
}
imprimirEventos(todosLosEventos)

function crearEvento(evento){
return `
<div class="card d-flex justify-content-center align-items-end m-2" style="width: 18rem;height:25rem">
<img src="${evento.image}" class="card-img-top p-1" alt="Coming soon" style="width:18rem; height: 10rem;">
<div class="card-body d-flex flex-column justify-content-center ">
<h5 class="card-title">${evento.name}</h5>
<p class="card-text fs-5">${evento.description}</p>
<div class=" d-flex flex-row justify-content-between">
<p> Price: ${evento.price} </p>
<a href="./pages/details.html?id=${evento.name.replace(/ /g, "")}" class="btn vermas btn-dark">See more..</a>
</div>
</div>
</div>`
}

const buscador=document.getElementById('buscador')
const botonBuscador=document.getElementById('search')


//todosLosEventos

const opcionesDeBusqueda=document.getElementById('opciones')

const categorias= todosLosEventos.map(evento => evento.category)
const categoriasFinal= new Set(categorias)
let arrayCategorias= Array.from(categoriasFinal)


imprimirCategorias(arrayCategorias,opcionesDeBusqueda)



function imprimirCategorias(parametro,lugar){
let template=""
for (let categoria of parametro) {
    template+= `<input type="checkbox" id="" name="${categoria}" value="${categoria}">
    <label for="${categoria}">${categoria}</label>  `
}
lugar.innerHTML=template
}


opcionesDeBusqueda.addEventListener('change', (e) =>{
    let arrayCategorias= Array.from(document.querySelectorAll('input[type="checkbox"]:checked') ).map (cat => cat.name )
    let filtro= filtrarPorCategoria(todosLosEventos,arrayCategorias)
    let resultados=buscadorDeTexto(filtro,buscador.value)
    imprimirEventos(resultados)
}
)

buscador.addEventListener('input', (e) => {
    let arrayCategorias= Array.from(document.querySelectorAll('input[type="checkbox"]:checked') ).map (cat => cat.name )
    let filtro= filtrarPorCategoria(todosLosEventos,arrayCategorias)
    let resultados=buscadorDeTexto(filtro,buscador.value)
    imprimirEventos(resultados)
})


    function buscadorDeTexto(array, texto) {
    if (!texto) {
      return array;
    } else {
      let textoMiniscula = texto.toLowerCase();
      return array.filter(
        (nota) =>
          nota.name.toLowerCase().includes(textoMiniscula) ||
          nota.description.toLowerCase().includes(textoMiniscula)
      );
    }
}

    function filtrarPorCategoria(array,categorias){
if (categorias.length === 0 ){
return array
}else{
return array.filter(array => categorias.includes(array.category))
}
}
