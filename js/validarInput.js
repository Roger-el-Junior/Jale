function input() {
  v1 = document.getElementById('pr1')
  console.log(v1.value)
  parrafo(v1.value)
}


let i = document.querySelector('input').addEventListener ('keypress', function(e) {
  validar(e);
})
//funcion para validar se haya pulsado enter incluyendo dispositivos moviles


function validar(e) {
  let tecla = (document.all) ? e.keyCode: e.which; 
  
  if(tecla == 13){
    input()
  }
}