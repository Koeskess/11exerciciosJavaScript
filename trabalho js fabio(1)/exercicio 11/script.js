let alturadegrau=parseFloat(prompt("Informe altura do degrau em metros: "));
let alturadesejada=parseFloat(prompt("Informe a altura que o pedreiro deseja subir: "));

var qtddegraus= alturadesejada/alturadegrau;
document.write("Ele deverá subir: " + qtddegraus + " degraus");
