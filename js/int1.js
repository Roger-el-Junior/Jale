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

function rmSon(dia) {

  let td = document.getElementsByTagName("td")
  let z = 0
  let n = 0
  for (var i = 0; i < td.length; i++) {
    n++
    switch (dia) {
      case 'Domingo':
        break;

      case "Lunes":
        if ((n >= 0) && (n <= 4)) {
          console.log(td[i]);

          z++

          switch (z) {
            case 1:

              td[i].setAttribute("id", "cantidadJugos")
              break;

            case 2:
              td[i].setAttribute("id", "efectivo")
              break;

            case 3:
              td[i].setAttribute("id", "fiados")
              break;

            case 4:
              td[i].setAttribute("id", "gasto")
              break;

            default:
              console.log("hay un fallo en el sistema")
              break;

          }

          if (n == 4) {
            td[n].setAttribute("id", "perdida")
          }
          continue
        }
        break;

      case "Martes":
        if ((n >= 6) && (n <= 9)) {
          z++

          switch (z) {
            case 1:

              td[i].setAttribute("id", "cantidadJugos")
              break;

            case 2:
              td[i].setAttribute("id", "efectivo")
              break;

            case 3:
              td[i].setAttribute("id", "fiados")
              break;

            case 4:
              td[i].setAttribute("id", "gasto")
              break;

            default:
              console.log("hay un fallo en el sistema")
              break;

          }

          if (n == 9) {
            td[n].setAttribute("id", "perdida")
          }
          console.log(z)
          continue
        };

        break;
      case "Miercoles":
        if ((n >= 11) && (n <= 14)) {

          z++

          switch (z) {
            case 1:

              td[i].setAttribute("id", "cantidadJugos")
              break;

            case 2:
              td[i].setAttribute("id", "efectivo")
              break;

            case 3:
              td[i].setAttribute("id", "fiados")
              break;

            case 4:
              td[i].setAttribute("id", "gasto")
              break;

            default:
              console.log("hay un fallo en el sistema")
              break;

          }

          if (n == 14) {
            td[n].setAttribute("id", "perdida")
          }
          console.log(z)

          continue
        }
        break;
      case "Jueves":
        if ((n >= 16) && (n <= 19)) {

          z++

          switch (z) {
            case 1:

              td[i].setAttribute("id", "cantidadJugos")
              break;

            case 2:
              td[i].setAttribute("id", "efectivo")
              break;

            case 3:
              td[i].setAttribute("id", "fiados")
              break;

            case 4:
              td[i].setAttribute("id", "gasto")
              break;

            default:
              console.log("hay un fallo en el sistema")
              break;

          }

          if (n == 19) {
            td[n].setAttribute("id", "perdida")
          }

          continue
        }
        break;
      case "Viernes":
        if ((n >= 21) && (n <= 24)) {

          z++

          switch (z) {
            case 1:

              td[i].setAttribute("id", "cantidadJugos")
              break;

            case 2:
              td[i].setAttribute("id", "efectivo")
              break;

            case 3:
              td[i].setAttribute("id", "fiados")
              break;

            case 4:
              td[i].setAttribute("id", "gasto")
              break;

            default:
              console.log("hay un fallo en el sistema")
              break;

          }

          if (n == 24) {
            td[n].setAttribute("id", "perdida")
          }

          continue
        };
        break;
      case "Sabado":
        if ((n >= 26) && (n <= 29)) {

          z++

          switch (z) {
            case 1:

              td[i].setAttribute("id", "cantidadJugos")
              break;

            case 2:
              td[i].setAttribute("id", "efectivo")
              break;

            case 3:
              td[i].setAttribute("id", "fiados")
              break;

            case 4:
              td[i].setAttribute("id", "gasto")
              break;

            default:
              console.log("hay un fallo en el sistema")
              break;

          }

          if (n == 29) {
            td[n].setAttribute("id", "perdida")
          }

          continue
        }
        break
      default:
        console.log("no existe")
      }

      if (n%5 == 0) {

        continue
      }

      let br = td[i]
      br.innerHTML = ""

    }

  }

  function aggId(nId) {
    z++
    switch (z) {
      case '1':
        td[n].setAttribute("id", "cantidadJugos")
        break;
      case '2':
        td[n].setAttribute("id", "efectivo")
        break;
      case '3':
        td[n].setAttribute("id", "fiados")
        break;
      case '4':
        td[n].setAttribute("id", "gasto")
        break;
      default:
        console.log("hay un fallo en el sistema")
      }
    }