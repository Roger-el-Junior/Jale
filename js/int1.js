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
  
  parse(cj, cJ)
  
  jugos = parseInt(cJ.value)
  


}

function pasar2() {
  let efectivo = document.getElementById('efectivo')

  let efectivo1 = document.querySelector('input[name="efectivo"]')
  
  parse(efectivo, efectivo1)
  
  dinero = parseInt(efectivo1.value)
  
  

}

function pasar3() {
  let fiados = document.getElementById('fiados')

  let fiados1 = document.querySelector('input[name="fiados"]')
  
  parse(fiados, fiados1)

  dejados = parseInt(fiados1.value)
  

}

function pasar4() {
  let gasto = document.getElementById('gasto')

  let gasto1 = document.querySelector('input[name="gasto"]')
  parse(gasto, gasto1)
  
  producto = parseInt(gasto1.value)
  
}

function parse(vC, vI) {

  if (vI.value == "") {
    vI.value = 0
  }

  vC.removeChild(vI)

  let p = document.createElement('p')
  p.innerHTML = vI.value

  vC.appendChild(p)

}