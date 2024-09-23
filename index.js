const input = document.querySelector('.input');
const button = document.querySelector('.button-transform');
const resultContainer = document.querySelector('.result-number')

function BinaryTransformer (number) {
    const clearNumber = parseInt(number, 10)
    if (clearNumber >= 0) {
        resultContainer.textContent = clearNumber.toString(2);
      } else {
        resultContainer.textContent= (clearNumber >>> 0).toString(2); 
      }
      
}

button.addEventListener('click', ()=> BinaryTransformer(input.value))