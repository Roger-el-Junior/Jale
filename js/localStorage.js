function guardarDatos() {
  let verDia = "dia"+dia;
  console.log(verDia + arr)
  let pD = JSON.stringify(arr);
  localStorage.setItem(verDia,
    pD);

}

let td1 = document.getElementsByTagName("td")

function cargarDatos() {
  let n = 0

  for (let i = 1; i < dia; i++) {
    let diaCD = "dia"+i
    let datos = localStorage.getItem(diaCD);
    let pD = JSON.parse(datos);
    for (let v of pD) {


      td1[n].innerHTML = `<p>${v}</p>`

      n++
    }
    console.log(pD)
  }

}

function borrarDatos() {
  for (let i = 0; i < dia; i++) {
    let key = "dia"+i
    localStorage.removeItem(key)
  }

}
