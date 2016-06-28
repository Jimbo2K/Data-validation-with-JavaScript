/*Author: Pablo Garrido
Date: 28/06/2016
Developed with Sublime Text 3*/

/********** NUMBER VALIDATIONS/VALIDACIONES NUMÉRICAS **********/

/*Float (positive or negative) number validation
Validación de número real, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true id pnum is a float number (integer numbers are also considered float), else false
function validaNum(pnum) {
	var aux1, aux2, aux3, salida;
	//¿La cadena no es válida (!=null, undefined, '')?
	aux1=!Boolean(pnum);
	//¿La cadena no es un número?, ¡¡'' y ' ' con isNaN se consideran números!!
	aux2=isNaN(pnum);
	//¿La cadena es ' '?
	aux3=(pnum===' ');
	//Si alguna de las tres condicones/variables anteriores son true pnum NO ES un numero
	if (aux1 || aux2 || aux3) {salida=false;}
	else {salida=true;}
	return salida;
}

/*Float (positive or negative) number validation
Validación de número real, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true id pnum is a float number (integer numbers are also considered float), else false
function stringIsFloat(pnum) {
	//rexp (\s*)='',' ','  '... ; (-?)='','-' ; (\d+)='x','xx'... ; (\.?)='','.' ; (\d*)='','x','xx'... ; x=[0-9]
	var rexp=/^\s*(?:-?\d+\.?\d*)\s*$/;
	//expresiónregular.exec(string) devuelve un array si encuentra la expresión en la cadena y si no null
	//Boolean(array)=true; Boolean(null)=false
	var salida=Boolean(rexp.exec(pnum));
	return salida;
}