let salario=parseFloat(prompt("Informe seu salário atual: "));

let reajuste = salario + (salario * 25 / 100);

document.write("Seu salário atual é: " + salario + " reais" +"<br>");
document.write("Seu salário com reajuste ficou: " + reajuste + " reais.");
