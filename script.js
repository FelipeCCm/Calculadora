function calcTotal(){
  const inputAltura = document.querySelector('.js-altura-input').value;
  const inputPeso = document.querySelector('.js-peso-input').value;
  let result = '';

  result = inputPeso / ((inputAltura/100)*(inputAltura/100));
  document.querySelector('.js-calc-result')
    .innerText = `Seu IMC é: ${result.toFixed(2)}`;
}
