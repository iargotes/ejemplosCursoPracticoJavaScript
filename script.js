const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calcualo1');
const input2 = document.querySelector('#calcualo2');
const botonCalcular = document.querySelector('#btnCalcuar');
const result = document.querySelector('#result');


form.addEventListener('submit',btcOnClick);


function btcOnClick(event){
    event.preventDefault();
    const reultado = parseInt(input1.value) + parseInt (input2.value)
    result.innerHTML = "el resulta es " + reultado
};


