window.onload = function() {
  // Numero de enlaces de la pagina
  links = document.getElementsByTagName('a');
  console.log(links.length);
  // Direccion del penultimo enlace
  var prelast = links.length - 2;
  var prelast_link = links[prelast];
  console.log(prelast_link);
  // Numero de enlaces que apuntan a http://prueba
  var count= 0;

  for(var i=0; i < links.length; i++){
    var href = links[i].href
    if(href == "http://prueba/"){
          count += 1;
  }
}
  console.log(count);
  // Numero de enlaces del tercer p�rrafo
  var parrafo = document.getElementsByTagName('p');
  var tercer_parrafo = parrafo[2];
  var links_parrafo = tercer_parrafo.getElementsByTagName('a');
  console.log(links_parrafo.length);


}
