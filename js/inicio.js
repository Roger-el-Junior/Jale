document.addEventListener('DOMContentLoaded', function() {

  dia()
  //cargarDatos()

  if (dia == 0) {
    for (let n = 0; n <= 5; n++) {
      let key = "dia"+n
      localStorage.removeItem(key)
    }
    console.log("Hoy es Domingo")
  }

})


var dia;

function dia() {

  const semana = ["Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"]

  let d = new Date()
  dia = d.getDay()

  rmSon("Sabado")


}

