let arr = []
let jugos, dinero, dejados, producto, perdida


function iniciar() {
  
  jugos = parseInt(selecDatos('cantidadJugos') )
  arr.push(jugos)

  dinero = parseInt(selecDatos('efectivo') )
  arr.push(dinero)
  
  dejados = parseInt(selecDatos('fiados') )
  arr.push(dejados)

  producto = parseInt(selecDatos('gasto') )
  arr.push(producto)


  perdidaTotal()

  // guardarDatos()
}

function selecDatos(name) {
  let v1 = document.getElementById(name)

  let v2 = document.querySelector(`input[name=${name}]`)

  parse(v1, v2)

  return v2.value
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
