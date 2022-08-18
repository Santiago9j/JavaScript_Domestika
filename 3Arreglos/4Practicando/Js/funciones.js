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
        "<div class='tarjeta'>"+
        "<div class= 'tarjeta_contenido'>"+
        elemento+
        "</div>"
        "</div>"
        mesa.appendChild(tarjeta);
    })
}
function descubrir() {
    this.classList.add("descubierta");
}
repartirTarjetas();
document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
});