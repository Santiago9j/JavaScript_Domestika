var nombres = ["Jhoana","Santiago","Laura","Juanita"]
function repartir(){
    var resultado;
    resultado = nombres.sort(
        function (){
            return 0.5 - Math.random();
        }
    )
    return resultado;
}
console.log(nombres)
console.log(repartir())