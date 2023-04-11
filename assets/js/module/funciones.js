export function buscadorDeTexto(array, texto) {
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
export function filtrarPorCategoria(array,categorias){
if (categorias.length === 0 ){
return array
}else{
return array.filter(array => categorias.includes(array.category))
}
}
export function imprimirCategorias(parametro,lugar){
    let template=""
    for (let categoria of parametro) {
        template+= `<input type="checkbox" id="" name="${categoria}" value="${categoria}">
        <label for="${categoria}">${categoria}</label>  `
    }
    lugar.innerHTML=template
}
export function crearEvento(evento){
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
export function imprimirEventos(parametro,lugar) {
            if (parametro.length === 0) {
            lugar.innerHTML = "NO HAY EVENTOS";
            } else {
              const eve = parametro.map(crearEvento).join("");
              lugar.innerHTML = eve;
            }
}
export function imprimirDetail(evento){
  return `<div class="d-flex justify-content-center mt-5 mb-5 card" style="width: 80%; min-height: 66vh;">
  <div class="d-flex justify-content-center row g-0">
    <div class="col-md-4">
      <img src="${evento.image}" class="paginaDeDetails" alt="..." style="width:100%; height: 100%;">
    </div>
    <div class="col-md-6">
      <div class="ms-3 card-body ">
        <h2 class="card-title">${evento.name}</h2>
        <p class="card-text">
          <ul>
          <li>Date: ${evento.date} </li>
          <li>Category: ${evento.category}</li>
          <li>Place: ${evento.place}</li>
          <li>Capacity: ${evento.capacity}</li>
          ${evento.assistance ? `<li>Assistance: ${evento.assistance}</li>` : `<li>Estimate: ${evento.estimate}</li>`}
          <li>Price: ${evento.price}</li>
          <li>Description:${evento.description}</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  `
  }
