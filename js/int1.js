function pr1() {
  let cJ = document.querySelector('input[name="cantidadJugos"]').value

  let efectivo = document.querySelector('input[name="efectivo"]').value

  let fiados = document.querySelector('input[name="fiados"]').value

  let gasto = document.querySelector('input[name="gasto"]').value

  let perdida = document.querySelector('input[name="perdida"]').value

  //vemos cuanto Devereaux qedar
  let dineroEfectivo = parseInt(efectivo)+parseInt(gasto) //ps

  //Sacamos los jugos q se vendieron
  let totalEfectivo = cJ - fiados //jugos

  //vemos el efectibo total q Deveria aver
  let total = totalEfectivo*12

  //restarts para ver lo q falta del dimero
  let perdidaTotal = total-dineroEfectivo

  //checks el total dinero
  console.log(total)

  console.log(dineroEfectivo)

  console.log(perdidaTotal)

  //parrafo(td, total, perdida)
  let tr = document.getElementById('martes')
  let td = document.querySelectorAll('td')
  console.log(td)

}

/*
  let efectivo = document.getElementById('efectivo')
  let fiados = document.getElementById('fiados')
  let gasto = document.getElementById('gasto')
  let perdida = document.getElementById('perdida')
  
*/

let jugos, dinero, dejados, producto, perdida 

function pasar() {
  let cj = document.getElementById('cantidadJugos')
  
  let cJ = document.querySelector('input[name="cantidadJugos"]')

  cj.removeChild(cJ)
    
  let p = document.createElement('p')
  p.innerHTML = cJ.value
  jugos = cJ.value


  cj.appendChild(p)
  //cJ.style.display = 'none'

}

function pasar2() {
  let efectivo = document.getElementById('efectivo')
  
  let efectivo1 = document.querySelector('input[name="efectivo"]')

  efectivo.removeChild(efectivo1)
    
  let p = document.createElement('p')
  p.innerHTML = efectivo1.value
  dinero = efectivo1.value

  efectivo.appendChild(p)
  //cJ.style.display = 'none'

}

function pasar3() {
  let fiados = document.getElementById('fiados')
  
  let fiados1 = document.querySelector('input[name="fiados"]')

  fiados.removeChild(fiados1)
    
  let p = document.createElement('p')
  p.innerHTML = fiados1.value
  dejados = fiados1.value

  fiados.appendChild(p)
  //cJ.style.display = 'none'

}

function pasar4() {
  let gasto = document.getElementById('gasto')
  
  let gasto1 = document.querySelector('input[name="gasto"]')

  gasto.removeChild(gasto1)
    
  let p = document.createElement('p')
  p.innerHTML = gasto1.value
  producto = gasto1.value

  gasto.appendChild(p)
  //cJ.style.display = 'none'

}