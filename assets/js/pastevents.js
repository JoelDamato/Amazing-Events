import{imprimirEventos,imprimirCategorias,filtrarPorCategoria,buscadorDeTexto} from './module/funciones.js'


const contenedorDeEventos= document.getElementById('mainDePast')

let url="details.html"
let todosLosEventos;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
          .then( data => data.json()) // .json me transforma el fetch en objeto
        .then( respuesta => {
            todosLosEventos = respuesta.events
            console.log(todosLosEventos)
            let fecha= respuesta.currentDate
            let filtrado=[]
            for (let evento of todosLosEventos ){
                if(evento.date<fecha)
                filtrado.push(evento)
            }
            imprimirEventos(filtrado,contenedorDeEventos,url)
            let arrayCategorias= [...new Set(filtrado.map(evento => evento.category))]
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
