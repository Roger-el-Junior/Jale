let i = document.querySelector('input').addEventListener ('keypress', function(e) {
  validar(e);
})
//funcion para validar se haya pulsado enter incluyendo dispositivos moviles


function validar(e) {
  let tecla = (document.all) ? e.keyCode: e.which; 
  
  console.log("keyPres")
  
  if(tecla == 13){
    input()
  }
}