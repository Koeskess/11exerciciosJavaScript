    var A=parseFloat(prompt("Digite o valor de A: "));
    var B=parseFloat(prompt("Digite o valor de B: "));
    var C=parseFloat(prompt("Digite o valor de C: "));

   var d = Math.pow(B, 2) - 4*A*C;

   var X1 = ( -B + Math.sqrt(d)) / (2*A);
   var X2 = ( -B - Math.sqrt(d)) / (2*A);

   document.write("X1 = " + X1.toFixed(2)+ "</br>X2 = "+X2.toFixed(2));
    