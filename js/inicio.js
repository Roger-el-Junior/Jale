function width(){
  let ancho = window.innerWidth
  let alto = window.innerHeight
  console.log(ancho)
  console.log(alto)
}

width()

document.addEventListener('DOMContentLoaded', function() {
  
  dia()
  cargarDatos()

  if(dia==0){
    for(let n =0 ;n<=5;n++){
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

  rmSon(semana[dia])
  

}

function iniciar() {
  pasar()
  pasar2()
  pasar3()
  pasar4()

  perdidaTotal()
  
  guardarDatos()


}
function guardarDatos(){
  let verDia = "dia"+dia;
  console.log(verDia + arr)
  let pD = JSON.stringify(arr);
  localStorage.setItem(verDia, pD);
  
}

let td1 = document.getElementsByTagName("td")

function cargarDatos(){
  let n = 0
  
  for(let i=1;i<dia;i++){
    let diaCD = "dia"+i
    let datos= localStorage.getItem(diaCD);
    let pD = JSON.parse(datos);
    for(let v of pD){
      
      
      td1[n].innerHTML = `<p>${v}</p>`
      
      n++
    }
    console.log(pD)
  }
  
}

function borrarDatos(){
  for(let i=0;i<dia;i++){
    let key = "dia"+i
    localStorage.removeItem(key)
  }

}

function perdidaTotal() {
  let total = (dinero+producto) // pesos

  let totalVendidos = jugos-dejados

  let dejadosEnPesos = dejados*12

  let efectivoEsperado = total+dejadosEnPesos

  jugos *= 12

  console.log(efectivoEsperado+"" + jugos)


  if (efectivoEsperado < jugos) {
    console.log("falta")

    let asig = document.getElementById('perdida');

    let faltante = efectivoEsperado-jugos;

    asig.innerHTML = `<p>${faltante}</p>`;
    arr.push(faltante)
    

  } else if (efectivoEsperado > jugos) {
    console.log("sobra")
    console.log(efectivoEsperado-jugos)
    
    document.getElementById('perdida').innerHTML = `<p>0</p>`

    arr.push(0)

  } else if (efectivoEsperado == jugos) {

    console.log("Todo esta correcto")
    document.getElementById('perdida').innerHTML = `<p>0</p>`
    arr.push(0)
  }


}


// Verifica si la API de orientación de pantalla es compatible
if (screen.orientation) {
    // Solicita la orientación de la pantalla en modo horizontal
    screen.orientation.lock('landscape')
        .then(function () {
            console.log('La orientación de la pantalla ha sido cambiada a horizontal.');
        })
        .catch(function (error) {
            console.error('Error al cambiar la orientación de la pantalla:', error);
        });
} else {
    console.warn('La API de orientación de pantalla no es compatible en este navegador.');
}
