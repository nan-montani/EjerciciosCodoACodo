var valoresonce = []
var valoresdiez = []
var valoresnueve = []

function tabla11(){
    for (let index = 1; index < 10; index++) {
        console.log(11 * [index])
        valoresonce.push(11 * [index])
    }
    console.log(valoresonce)
    for (let i = 0; i < valoresonce.length; i++) {
        const element = valoresonce[i];
        document.querySelector('#tabla11').innerHTML += 
        `       
            <li>11 x ${[i+1]} : ${element}</li>        
        `

    }
}

tabla11()

function tabla10(){
    for (let index = 1; index < 10; index++) {
        valoresdiez.push(10 * [index])
    }
    console.log(valoresdiez)
    for (let i = 0; i < valoresdiez.length; i++) {
        const element = valoresdiez[i];
        document.querySelector('#tabla10').innerHTML += 
        `       
            <li>10 x ${[i+1]} : ${element}</li>        
        `

    }
}

tabla10()

function tabla9(){
    for (let index = 1; index < 10; index++) {
        valoresnueve.push(9 * [index])
    }
    console.log(valoresnueve)
    for (let i = 0; i < valoresnueve.length; i++) {
        const element = valoresnueve[i];
        document.querySelector('#tabla9').innerHTML += 
        `       
            <li>9 x ${[i+1]} : ${element}</li>        
        `

    }
}

tabla9()