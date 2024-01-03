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