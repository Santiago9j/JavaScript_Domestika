function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2022 - fecha;

  var bienvenida = document.querySelector("#bienvenida");

  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida
  var mensajeGeneral;
  var tipoPersona;
  var complemento = ". Su edad es: ";
  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad
  if (edad<=17){
    tipoPersona = "Joven";
  } else if (edad<=59){
    tipoPersona = "Adulto"
  } else{
    tipoPersona = "Tercera edad."
  }
  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene
  if (nombre=="" || fecha ==""){
    mensajeGeneral = "<p>Faltan campos por llenar.</p>";
    
  } else {

  
  // EJERCICIO: Realiza la composició del mensaje final y cárgalo
  // en la variable que hayas preparado
  mensajeGeneral = "<p> Hola, "+nombre+complemento+edad+". Y pertenece a: "+tipoPersona+"</p>";
  }
  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida
  bienvenida.innerHTML = mensajeGeneral;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
