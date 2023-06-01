import{imprimirEventos,imprimirCategorias,filtrarPorCategoria,buscadorDeTexto} from './module/funciones.js'


const contenedorDeEventos= document.getElementById('mainDeUpComing')
const todosLosEventos = []
const fecha=eventos.fechaActual

for (let evento of eventos.eventos ){
    if(fecha<evento.date)
    todosLosEventos.push(evento)
}


imprimirEventos(todosLosEventos,contenedorDeEventos,"./hola.html")


const buscador=document.getElementById('buscador')
const botonBuscador=document.getElementById('search')


//todosLosEventos

const opcionesDeBusqueda=document.getElementById('opciones')

const categorias= todosLosEventos.map(evento => evento.category)
const categoriasFinal= new Set(categorias)
let arrayCategorias= Array.from(categoriasFinal)


imprimirCategorias(arrayCategorias,opcionesDeBusqueda)




opcionesDeBusqueda.addEventListener('change', (e) =>{
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

