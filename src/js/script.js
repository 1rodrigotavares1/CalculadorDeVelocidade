function calcular(){
    var temp = document.getElementById('temp')
    var t = Number(temp.value) 
    /* Essa linha transforma a var temp em número */

    var t = (t/3600).toFixed(8) 
    /* Essa linha transforma o tempo em hora */

    var dis = document.getElementById('dis')
    var d = Number(dis.value) 
    /* Essa linha transforma a var dis em número */

    var d = (d/1000).toFixed(5)

    var r= document.getElementById('resultados')

    var r= Number(r.value)
    var velocidade =  (d/t).toFixed(2)
    vel.innerHTML = `A velocidade foi de <strong>${velocidade}KM/h!</strong><br>` 
    resultados.innerHTML = `A distancia é de ${d} quilometro e o tempo é ${t} horas!`
    if (velocidade > 80) {
        vel.innerHTML += 'Você foi multado por estar acima de <strong>80KM/h!</strong>'
    }
    else {
        mult.innerHTML= ''
    }

}

