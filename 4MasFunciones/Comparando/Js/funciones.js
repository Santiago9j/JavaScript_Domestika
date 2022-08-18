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
    var totDescubiertas = document.querySelectorAll(".descubierta");
    //Lo siguiente permite que solo se puedan descubrir dos tarjetas.
    if (totDescubiertas.length > 1){
        return; //Finaliza la función.
    }
    this.classList.add("descubierta");
    
    console.log(totDescubiertas.length)
    //Ahora, vamos a verificar que las dos tarjetas sean iguales.
    if (totDescubiertas.length!=1){
        return; //Todavia falta descubrir tarjetas.
    }
    totDescubiertas = document.querySelectorAll(".descubierta");
    //Ahora, para continuar, vamor a ir a la linea 16 y vamos agregar lo siguiente:
    // "<div class='tarjeta' data-valor='"+elemento+"'>"+
    if (totDescubiertas[0].dataset.valor === totDescubiertas[1].dataset.valor){
        console.log("Correcto")
    } else {
        console.log("Incorrecto.")
    }
}
repartirTarjetas();
document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
});