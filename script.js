function enterKeyDown(event) {
  event.key === 'Enter' ? calcTotal() : '';
}

function calcTotal(){
  const inputAltura = document.querySelector('.js-altura-input').value;
  const inputPeso = document.querySelector('.js-peso-input').value;
  const calcResult = document.querySelector('.js-calc-result');
  let result = '';
  
result = inputPeso / ((inputAltura/100)*(inputAltura/100));
  switch(true) {
    case result < 18.5:
      calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Magreza`;
      break;
    case result > 18.5 && result < 24.9:
      calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Normal`;
      break;
    case result > 25.0 && result < 29.9:
      calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Sobrepeso`;
      break;
    case result > 30.0 && result < 39.9:
      calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Obesidade`;
      break;
    case result > 40.0:
      calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Obesidade grave`;
      break;
    default:
      calcResult.innerText = `Insira um valor válido.`;
      break;
  }

}

/*
 result = inputPeso / ((inputAltura/100)*(inputAltura/100));
  if(result < 18.5){
    calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Magreza`;
  } else if (result > 18.5 && result < 24.9) {
    calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Normal`;
  } else if (result > 25.0 && result < 29.9) {
    calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Sobrepeso`;
  } else if (result > 30.0 && result < 39.9) {
    calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Obesidade`;
  } else if (result > 40.0) {
    calcResult.innerText = `Seu IMC é: ${result.toFixed(2)} Classificação Obesidade grave`;
  }
 */
