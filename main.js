//El desafio plantea calcular cuanto una persona debera pagar por cuota, segun las cuotas que elija, sobre un monto ya estipulado.
//Plantear el caso donde deba pagar con o sin interes dependiendo de si usa o no tarjeta Visa.
//las cuotas a elegir solo son 3, 6 y 12... de lo contrario no devolvera un valor.
//Tratas de realizar interaccion entre funciones.

let monto = 45000 //monto estipulado de antemano, del cual se calculara las cuotas.
let cuotas = parseInt(prompt("Usted acaba de comprar un producto de coste, 45000$ pesos, ingrese la cantidad de cuotas en la que desea abonar el producto. Recuerde que solo se puede elegir entre 3, 6 y 12 cuotas."))
let tarjeta = prompt("Ingrese la tarjeta con la que desea abonar el producto, si elige abonar con tarjeta visa, tendrá 3, 6 o 12 cuotas sin interés.")


function calcularInteres(cuotas, tarjeta){
tarjetaVisa()
    let cuotasMes = monto / cuotas

        if(tarjeta.toLowerCase() != "visa"){
            if(cuotas == 3){
                cuotasMes = cuotasMes + (cuotasMes * 0.10)
                alert(`Usted deberá pagar ${cuotasMes}$ pesos por mes`)
            }else if(cuotas == 6){
                cuotasMes = cuotasMes + (cuotasMes * 0.20)
                alert(`Usted deberá pagar ${cuotasMes}$ pesos por mes`)
            }else if(cuotas == 12){
                cuotasMes = cuotasMes + (cuotasMes * 0.50)
                alert(`Usted deberá pagar ${cuotasMes}$ pesos por mes`)
            }else{
                alert("Las cuotas ingresadas no son válidas.")
        }
    }
}

function tarjetaVisa(){
     if(tarjeta.toLowerCase() == "visa"){
        if((cuotas == 3)||(cuotas == 6)||(cuotas == 12)){
            cuotasMes = monto / cuotas
            alert(`Usted abonará por mes ${cuotasMes}$ en ${cuotas} cuotas sin interés.`)
        }else{
            alert("Las cuotas ingresadas no son válidas.")
        }
    }
}

calcularInteres(cuotas, tarjeta)