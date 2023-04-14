import{tabla,imprimirTabla, eventMaxAssistance,eventMinAssistance,eventMaxCapacity}from './module/funciones.js'

let todosLosEventos;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((data) => data.json())
  .then((res) => {
    todosLosEventos = res.events;
    console.log(todosLosEventos);

    let fecha = res.currentDate;
    const pastEvent = todosLosEventos.filter((evento) => fecha > evento.date);
    const upcomingEvent = todosLosEventos.filter((evento) => fecha < evento.date)

    const $tableConteiner = document.getElementById("tableContent");
    $tableConteiner.innerHTML = imprimirTabla(todosLosEventos);

    let upcomingStatics = upcomingEvent.map((e)=>{
      return {
          categoria : e.category,
          revenues : e.price * e.estimate,
          porcentajeDeAsistencia: (e.estimate * 100 /e.capacity)
      }
  })

  let upcomingFilter = [...new Set(upcomingEvent.map((evento) => evento.category))].map(categoria =>{ 
    let aux = upcomingStatics.filter(elemento => elemento.categoria == categoria)
    console.log(aux)
    let acumulado= {categoria:categoria,revenues:0,porcentaje:0,cantidad:0}
    console.log(acumulado)
    for (let iterator of aux) {
      acumulado.revenues += iterator.revenues
      acumulado.porcentaje += iterator.porcentajeDeAsistencia
      acumulado.cantidad ++
      
    }
    acumulado.porcentaje = acumulado.porcentaje/acumulado.cantidad
    return acumulado
  })
console.log(upcomingFilter)

let pastSratics = pastEvent.map((e)=>{
  return {
      categoria : e.category,
      revenues : e.price * e.assistance,
      porcentajeDeAsistencia: (e.assistance * 100 /e.capacity)
  }
})

let pastEventFilter = [...new Set(pastEvent.map((evento) => evento.category))].map(categoria =>{ 
  let aux = pastSratics.filter(elemento => elemento.categoria == categoria)
  console.log(aux)
  let acumulado= {categoria:categoria,revenues:0,porcentaje:0,cantidad:0}
  console.log(acumulado)
  for (let iterator of aux) {
    acumulado.revenues += iterator.revenues
    acumulado.porcentaje += iterator.porcentajeDeAsistencia
    acumulado.cantidad ++
    
  }
  acumulado.porcentaje = acumulado.porcentaje/acumulado.cantidad
  return acumulado
})
console.log(pastEventFilter)

const up=document.getElementById('up')
const pas=document.getElementById('past')
const $evenmax=document.getElementById('evenmax')
const $evenmin=document.getElementById('evenmin')
const $evencap=document.getElementById('evencap')

$evenmax.innerHTML = eventMaxAssistance(pastEvent);
$evenmin.innerHTML = eventMinAssistance(pastEvent);
$evencap.innerHTML = eventMaxCapacity(todosLosEventos);

  tabla(upcomingFilter,up)
  tabla(pastEventFilter,pas)

  })

  .catch((err) => console.log(err));



