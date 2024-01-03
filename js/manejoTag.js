let z = 0;
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
        if ((n >= 0) && (n <= 4)) {;

          aggId(i)

          if (n == 4) {
            td[n].setAttribute("id", "perdida")
          }
          continue
        }
        break;

      case "Martes":
        if ((n >= 6) && (n <= 9)) {

          aggId(i)

          if (n == 9) {
            td[n].setAttribute("id", "perdida")
          }
          console.log(z)
          continue
        };

        break;
      case "Miercoles":
        if ((n >= 11) && (n <= 14)) {

          aggId(i)

          if (n == 14) {
            td[n].setAttribute("id", "perdida")
          }
          console.log(z)

          continue
        }
        break;
      case "Jueves":
        if ((n >= 16) && (n <= 19)) {

          aggId(i)

          if (n == 19) {
            td[n].setAttribute("id", "perdida")
          }

          continue
        }
        break;
      case "Viernes":
        if ((n >= 21) && (n <= 24)) {

          aggId(i)


          if (n == 24) {
            td[n].setAttribute("id", "perdida")
          }

          continue
        };
        break;
      case "Sabado":
        if ((n >= 26) && (n <= 29)) {

          aggId(i)

          if (n == 29) {
            td[n].setAttribute("id", "perdida")
          }

          continue
        }
        break
      default:
        console.log("no existe")
        break
    }

    if (n%5 == 0) {

      continue
    }

    let br = td[i]
    br.innerHTML = ""

  }

}

function aggId(nId) {

  let td = document.getElementsByTagName("td")
  z++
  switch (z) {
    case 1:
      td[nId].setAttribute("id", "cantidadJugos")
      break;
    case 2:
      td[nId].setAttribute("id", "efectivo")
      break;
    case 3:
      td[nId].setAttribute("id", "fiados")
      break;
    case 4:
      td[nId].setAttribute("id", "gasto")
      break;
    default:
      console.log("hay un fallo en el sistema"+z)
      break
  }
}