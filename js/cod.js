function formatInput(input) {
    input.value = input.value.replace('.', ',');
}

function calcular() {
    const alturaStr = document.getElementById('ialt').value
    const pesoStr = document.getElementById('ipeso').value

    const altura = parseFloat(alturaStr.replace(',', '.'))
    const peso = parseFloat(pesoStr.replace(',', '.'))
    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, insira valores válidos para altura e peso.")
        return
    }

    const imc = peso / (altura * altura)
    const resultado = document.getElementById('res')
    resultado.innerText = (`${imc.toFixed(2)}`)


    const result0 = document.getElementById('result0')
    const result1 = document.getElementById('result1')
    const result2 = document.getElementById('result2')
    const result3 = document.getElementById('result3')
    const result4 = document.getElementById('result4')


    result0.style.background = ''
    result1.style.background = ''
    result2.style.background = ''
    result3.style.background = ''
    result4.style.background = ''

    if (imc < 18.5) {
        result0.style.background = 'rgba(255, 94, 0, 0.664)'
    } else if (imc >= 18.5 && imc < 24.9) {
        result1.style.background = 'rgba(50, 155, 29, 0.664)'
    } else if (imc >= 25 && imc < 29.9) {
        result2.style.background = 'rgba(255, 94, 0, 0.664)'
    } else if (imc >= 29.9 && imc < 40.0) {
        result3.style.background = 'rgba(255, 38, 0, 0.664)'
    } else {
        result4.style.background = 'rgba(255, 0, 0, 0.664)'
    }
}

