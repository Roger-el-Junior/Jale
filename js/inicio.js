document.addEventListener('DOMContentLoaded', function(){
  //creaInput()
  dia()

})

function dia(){
  
  const semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
  
  let d = new Date()
  let dia = d.getDay()
    
  rmSon(dia)
  
}

function iniciar(){
  pasar()
  pasar2()
  pasar3()
  pasar4()
  
  
  perdidaTotal()
}
function perdidaTotal(){
  let total = (dinero+producto) // pesos 
  
  let totalVendidos = jugos-dejados
  
  let dejadosEnPesos = dejados*12
  
  let efectivoEsperado = total+dejadosEnPesos 
  
  jugos*=12
  
  console.log(efectivoEsperado+"" + jugos)
  
  
  if(efectivoEsperado < jugos){
    console.log("falta")
    
    let asig = document.getElementById('perdida');
  
    let faltante = efectivoEsperado-jugos;
    
    asig.innerHTML = `<p>${faltante}</p>`;
    
  }else if(efectivoEsperado > jugos){
    console.log("sobra")
    console.log(efectivoEsperado-jugos)
  }else if(efectivoEsperado == jugos){
    
    console.log("Todo esta correcto")
  }

  
}

