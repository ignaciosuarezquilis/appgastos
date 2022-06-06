function calculaTotal(){
  let inputValue = document.getElementById("cantidad").value;
  n++;
  let nombre = document.getElementById("nombre").value;
  total+=parseInt(inputValue);
  document.getElementById("total").innerHTML = `El total es: ${total}`; 
  document.getElementById("lista-nombres").innerHTML+=`<div>${nombre}: $${inputValue}<div>`;
  document.getElementById("cadauno").innerHTML=`A cada uno le toca pagar ${total/n}`
}
  
  let total=0;
  let n=0;
