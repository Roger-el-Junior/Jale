//c ser dinamico
// v1 deve ser param

function parrafo(obj, content, qit) {

  let p = document.createElement('p')
  p.innerHTML = content

  obj.appendChild(p)
  obj.removeChild(qit)

}

let v1;

//accedemos al input y agregamos el evento keypress



//alert ('Has pulsado enter'); }


function creaInput(v1) {
  
  let inp = document.createElement('input')
  inp.setAttribute('id', 'pr1')
  
  v1.appendChild(inp)
  
}


function td(v1){
  let td = document.createElement('td');
  td.innerHTML = creaInput(td);
  
  
}

let id = document.getElementById('lumes')
td(id)