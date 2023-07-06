import{imprimirDetail} from './module/funciones.js'


let todosLosEventos;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
          .then( data => data.json()) // .json me transforma el fetch en objeto
        .then( respuesta => {
            todosLosEventos = respuesta.events
            let urlLocation= location.search
            evento._id
            let id = params.get('id')
            
            
            let eventosFiltrados= todosLosEventos.find(evento => evento._id == id)
            const cardDetails=document.getElementById('contenedorDetail')
            
            cardDetails.innerHTML= imprimirDetail(eventosFiltrados)

            }
          ) //
            .catch( err => console.log(err))











