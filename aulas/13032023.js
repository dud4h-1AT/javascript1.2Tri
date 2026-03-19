let lucro = 30;

let lucro2 = 10;

function soma(a,b){
4
    return a + b
5
}
6
​
7
soma(lucro,lucro2)
8
​
9
function resultadoDivisaoSocio(lucro,lucro2){
10
    return soma(lucro,lucro2)/2
11
}
12
​
13
function calculadora(ari,a,b){
14
    switch(ari){
15
        case '+':
16
            resultado = a + b;
17
            break;
18
        case '-':
19
            resultado = a - b;
20
            break;
21
        case'*':
22
            resultado = a * b;
23
            break;
24
        case'/':
25
            resultado = a / b;
26
            break;
27
        default:
28
            resultado = 'Operador inválido';
29
    }
30
    return resultado
31
}