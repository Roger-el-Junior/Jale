function creaInput() {
  
  let l = document.getElementById('lunes')
  
  let td = document.createElement('td')
  td.setAttribute('id', 'prc1')
  
  let inp = document.createElement('input')
  inp.setAttribute('id', 'pr1')
  
  td.appendChild(inp)
  l.appendChild(td)
  
}