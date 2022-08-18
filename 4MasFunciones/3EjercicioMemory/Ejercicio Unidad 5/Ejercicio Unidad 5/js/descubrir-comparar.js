function descubrir() {
  var descubiertas;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );

  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);
}

function comparar(tarjetasAComparar) {
  // EJERCICIO: compara el valor del atributo data-valor de las dos
  // tarjetas que llegan como argumento de la función descubrir().
  // Si se trata del mismo valor, ejecuta la función acierto(),
  // pasándole el argumento correspondiente.
  // Si se trata de un valor diferente, ejecuta la función error(),
  // también pasándole el argumento correspondiente.
}
