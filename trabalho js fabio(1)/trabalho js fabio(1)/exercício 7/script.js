    let nota1=parseFloat(prompt("Informe a primeira nota: "));
    let nota2=parseFloat(prompt("Informe a segunda nota: "));
    let nota3=parseFloat(prompt("Informe a terceira nota: "));

    let notas= (nota1 + nota2 + nota3)/3;
    let media = notas.toFixed(1);
    document.write("A média é: " + media);