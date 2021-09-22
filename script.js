function Converter() {
  var valor = parseFloat(document.getElementById("valor").value);
  var moeda = parseFloat(document.getElementById("moedas").value);
  var resultado = (valor * moeda).toFixed(2)

  document.getElementById("resultado").innerText = `O valor em real é: R$ ${resultado}.`


}