var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
function ordernar(){
    var resultados;
    resultados = totalTarjetas.sort(function(){
        return 0.5 - Math.random();
    })
    return resultados;
}
function repartirTarjetas(){
    var mesa = document.querySelector("#mesa");
    mesa.textContent = "";
    ordernar().forEach(function(elemento){
        var tarjeta = document.createElement("div");
        tarjeta.innerHTML = 
        "<div class='tarjeta' data-valor='"+elemento+"'>"+
        "<div class= 'tarjeta_contenido'>"+
        elemento+
        "</div>"
        "</div>"
        mesa.appendChild(tarjeta);
    })
}
function descubrir() {
    var totDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if (totDescubiertas.length > 1){
        return; 
    }
    this.classList.add("descubierta");
    if (totDescubiertas.length!=1){
        return; 
    }
    totDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    comparar(totDescubiertas);
}
function comparar(totDescubiertas){
    if (totDescubiertas[0].dataset.valor === totDescubiertas[1].dataset.valor){
        correcto(totDescubiertas);
    } else {
        incorrecto(totDescubiertas);
    }
}
function correcto(totDescubiertas){
    totDescubiertas.forEach(function(elemento){
        elemento.classList.add("acertada"); //Desaparce las tarjetas.
    })
}
function incorrecto(totDescubiertas){
    totDescubiertas.forEach(function(elemento) {
        elemento.classList.add("error");
    });
    setTimeout(function() {
        totDescubiertas.forEach(function(elemento) {
          elemento.classList.remove("descubierta");
          elemento.classList.remove("error");
        });
      }, 1000);
    
}
repartirTarjetas();
document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
});