const getValueInput = () =>{
  const inputValue = document.getElementById("Kilometros").value; 
  const consAuto = document.getElementById("Rendimiento").value; 
  const Nafta = document.getElementById("Precios").value; 
  console.log(Nafta)
  const litrosgastados = inputValue / consAuto;
  var word = '';
  if (litrosgastados != 1 ) {
      word = "s";
  }else{
      word = ""
  }
  var pesos = litrosgastados * Nafta ;
  pesos = Math.round(pesos)
     
  document.getElementById("Input").innerHTML =`Usted gasto ${litrosgastados} litro${word} de nafta, lo cual equivale a $${pesos}` ;  

}
