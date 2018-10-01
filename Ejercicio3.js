function VerAcrchivoEntrada(cadena) {
	var Cadena = "{(Hola)}"
	var contadorAbrePar = 0;
	var contadorCierraPar = 0;
	var contadorLlavesAbre = 0;
	var contadorLlavesCierra = 0;
	var contCorcheAbre = 0;
	var contCorcheCierre = 0;

	for (var i = 0; Cadena.length; i++){
		//------------ Parentesis ------------
		if(Cadena[i]==="("){
			contadorAbrePar = contadorAbrePar + 1;
			console.log("Cantidad Parentesis Abre: " + contadorAbrePar);
		}
		if(Cadena[i]===")"){
			contadorCierraPar = contadorCierraPar + 1;
			console.log("Cantidad Parentesis Cierres: " + contadorCierraPar);
		}
		//  ------------------ Llaves -----------
		if(Cadena[i]==="["){
			contadorLlavesAbre = contadorLlavesAbre + 1;
			console.log("Cantidad Parentesis Abre: " + contadorLlavesAbre);
		}
		if(Cadena[i]==="]"){
			contadorLlavesCierra = contadorLlavesCierra + 1;
			console.log("Cantidad Parentesis Cierres: " + contadorLlavesCierra);
		}
		//-------------- Corchetes ------------------
		if(Cadena[i]==="{"){
			contCorcheAbre = contCorcheAbre + 1;
			console.log("Cantidad Parentesis Abre: " + contCorcheAbre);
		}
		if(Cadena[i]==="}"){
			contCorcheCierre = contCorcheCierre + 1;
			console.log("Cantidad Parentesis Cierres: " + contCorcheCierre);
		}
	}
	
	if(contadorAbrePar === contadorCierraPar){
		console.log("Todo Bien");
	}
	else{
		console.log("Todo Mal");
	}
}

var Parentesis = VerAcrchivoEntrada();