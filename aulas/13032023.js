let lucro = 30;
let lucro2 = 10;
function soma(a,b){
    return a + b
}

soma(lucro,lucro2)

function resultadoDivisaoSocio(lucro,lucro2){
    return soma(lucro,lucro2)/2
}

function calculadora(ari,a,b){
    switch(ari){
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
        case'*':
            resultado = a * b;
            break;
        case'/':
            resultado = a / b;
            break;
        default:
            resultado = 'Operador inválido';
    }
    return resultado
}