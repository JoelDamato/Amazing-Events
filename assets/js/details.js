import{imprimirDetail} from './module/funciones.js'

const todosLosEventos = eventos.eventos

let urlLocation= location.search
console.log(urlLocation)
let params= new URLSearchParams(urlLocation)
console.log(params)
let id = params.get('id')


let eventosFiltrados= todosLosEventos.find(evento => evento.name.replace(/ /g, "") == id)

console.log(eventosFiltrados)

const cardDetails=document.getElementById('contenedorDetail')

cardDetails.innerHTML=imprimirDetail(eventosFiltrados)







