
import{statistic,estadisticas,tabla,imprimirTabla, eventMaxAssistance,eventMinAssistance,eventMaxCapacity}from './module/funciones.js'


let todosLosEventos;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((data) => data.json())
  .then((res) => {
    todosLosEventos = res.events;
    let fecha = res.currentDate;
    const pastEvent = todosLosEventos.filter((evento) => fecha > evento.date);
    const upcomingEvent = todosLosEventos.filter((evento) => fecha < evento.date)

    const $tableConteiner = document.getElementById("tableContent");
    $tableConteiner.innerHTML = imprimirTabla(todosLosEventos);

let upfiltrado=statistic(upcomingEvent)
let pastfiltrado=statistic(pastEvent)
let arraypas=estadisticas(pastEvent,pastfiltrado)
let arrayup=estadisticas(upcomingEvent,upfiltrado)


  const $up=document.getElementById('up')
  const $pas=document.getElementById('past')
  const $evenmax=document.getElementById('evenmax')
  const $evenmin=document.getElementById('evenmin')
  const $evencap=document.getElementById('evencap')
  

tabla(arrayup,$up)
tabla(arraypas,$pas)

$evenmax.innerHTML = eventMaxAssistance(pastEvent);
$evenmin.innerHTML = eventMinAssistance(pastEvent);
$evencap.innerHTML = eventMaxCapacity(todosLosEventos);


  })

  .catch((err) => console.log(err));

