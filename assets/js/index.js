
import{imprimirEventos,imprimirCategorias,filtrarPorCategoria,buscadorDeTexto} from './module/funciones.js'

const contenedorDeEventos= document.getElementById('mainDeIndex')


let todosLosEventos;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
          .then( data => data.json()) // .json me transforma el fetch en objeto
          .then( respuesta => {
            todosLosEventos = respuesta.events
            imprimirEventos(todosLosEventos,contenedorDeEventos)
            let arrayCategorias= [...new Set(todosLosEventos.map(evento => evento.category))]
            imprimirCategorias(arrayCategorias,opcionesDeBusqueda)

          } ) //
          .catch( err => console.log(err))
          

//* buscador y check*

//*check dinamicos*
const buscador=document.getElementById('buscador')
const opcionesDeBusqueda=document.getElementById('opciones')

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


