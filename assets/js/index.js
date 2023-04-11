import{imprimirEventos,imprimirCategorias,filtrarPorCategoria,buscadorDeTexto} from './module/funciones.js'

const contenedorDeEventos= document.getElementById('mainDeIndex')
const todosLosEventos = eventos.eventos


imprimirEventos(todosLosEventos,contenedorDeEventos)

//* buscador y check*//
//*check dinamicos*//

const buscador=document.getElementById('buscador')
const opcionesDeBusqueda=document.getElementById('opciones')

//* spread operador *//
let arrayCategorias= [...new Set(todosLosEventos.map(evento => evento.category))]

imprimirCategorias(arrayCategorias,opcionesDeBusqueda)

//*escuchar eventos

opcionesDeBusqueda.addEventListener('change', (e) =>{
    let arrayCat= [...(document.querySelectorAll('input[type="checkbox"]:checked') )].map (cat => cat.name )
    let filtro= filtrarPorCategoria(todosLosEventos,arrayCat)
    let resultados=buscadorDeTexto(filtro,buscador.value)
    imprimirEventos(resultados,contenedorDeEventos)
}
)

buscador.addEventListener('input', (e) => {
  let arrayCat= [...(document.querySelectorAll('input[type="checkbox"]:checked') )].map (cat => cat.name )
    let filtro= filtrarPorCategoria(todosLosEventos,arrayCat)
    let resultados=buscadorDeTexto(filtro,buscador.value)
    imprimirEventos(resultados,contenedorDeEventos)
})


