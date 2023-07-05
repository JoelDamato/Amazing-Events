import{imprimirEventos,imprimirCategorias,filtrarPorCategoria,buscadorDeTexto} from './module/funciones.js'


const contenedorDeEventos= document.getElementById('mainDeUpComing')


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
                if(evento.date>fecha)
                filtrado.push(evento)
            }
            imprimirEventos(filtrado,contenedorDeEventos,url)
            let arrayCategorias= [...new Set(filtrado.map(evento => evento.category))]
            imprimirCategorias(arrayCategorias,opciones)

          } ) //
          .catch( err => console.log(err))
          

//* buscador y check*

//*check dinamicos*
const buscador=document.getElementById('buscador')
const opciones=document.getElementById('opciones')
const categorias= todosLosEventos.map(evento => evento.category)
const categoriasFinal= new Set(categorias)
let arrayCategorias= Array.from(categoriasFinal)


imprimirCategorias(arrayCategorias,opciones)




opciones.addEventListener('change', (e) =>{
    let arrayCategorias= Array.from(document.querySelectorAll('input[type="checkbox"]:checked') ).map (cat => cat.name )
    let filtro= filtrarPorCategoria(todosLosEventos,arrayCategorias)
    let resultados=buscadorDeTexto(filtro,buscador.value)
    imprimirEventos(resultados,contenedorDeEventos,"./details.html")
}
)

buscador.addEventListener('input', (e) => {
    let arrayCategorias= Array.from(document.querySelectorAll('input[type="checkbox"]:checked') ).map (cat => cat.name )
    let filtro= filtrarPorCategoria(todosLosEventos,arrayCategorias)
    let resultados=buscadorDeTexto(filtro,buscador.value)
    imprimirEventos(resultados,contenedorDeEventos,"./details.html")
})

