
var lib = require('readline');
var interface1 = lib.createInterface({
	input: process.stdin,
	output: process.stdout
});
interface1.question('Ingrese una cadena  ', function (cadena) {
	//var cadena = "{(Hola)}"
	var contadorAbrePar = 0;
	var contadorCierraPar = 0;
	var contadorLlavesAbre = 0;
	var contadorLlavesCierra = 0;
	var contCorcheAbre = 0;
	var contCorcheCierre = 0;

	for (var i = 0; cadena.length; i++) {
		//------------ Parentesis ------------
		if (cadena[i] === "(") {
			contadorAbrePar = contadorAbrePar + 1;
		}
		if (cadena[i] === ")") {
			contadorCierraPar = contadorCierraPar + 1;
		}
		//  ------------------ Llaves -----------
		if (cadena[i] === "[") {
			contadorLlavesAbre = contadorLlavesAbre + 1;
		}
		if (cadena[i] === "]") {
			contadorLlavesCierra = contadorLlavesCierra + 1;
		}
		//-------------- Corchetes ------------------
		if (cadena[i] === "{") {
			contCorcheAbre = contCorcheAbre + 1;
		}
		if (cadena[i] === "}") {
			contCorcheCierre = contCorcheCierre + 1;
		}
		if(i === cadena.length){
			break;
		}
	}

	// Validador de la cadena
	console.log("----------------------------------------------");
	if (contadorAbrePar == contadorCierraPar) {
		console.log("Cantidad Parentesis Abre: " + contadorAbrePar);
		console.log("Cantidad Parentesis Cierres: " + contadorCierraPar);
		console.log("Lectura de Parentesis Bien");
	}
	else {
		console.log("Cantidad Parentesis Abre: " + contadorAbrePar);
		console.log("Cantidad Parentesis Cierres: " + contadorCierraPar);
		console.log("Lectura de Parentesis Mal");
	}
	console.log("----------------------------------------------");

	if (contadorLlavesAbre == contadorLlavesCierra) {
		console.log("Cantidad Llaves Abre: " + contadorLlavesAbre);
		console.log("Cantidad Llaves Cierres: " + contadorLlavesCierra);
		console.log("Lectura de Llaves Bien");
	}
	else {
		console.log("Lectura de Llaves Mal");
	}
	console.log("----------------------------------------------");

	if (contCorcheAbre == contCorcheCierre) {
		console.log("Cantidad Corchetes Abre: " + contCorcheAbre);
		console.log("Cantidad Corchetes Cierres: " + contCorcheCierre);
		console.log("Lectura de Corchetes Bien");
	}
	else {
		console.log("Cantidad Corchetes Abre: " + contCorcheAbre);
		console.log("Cantidad Corchetes Cierres: " + contCorcheCierre);
		console.log("Lectura de Corchete Mal");
	}

	interface1.close();
});