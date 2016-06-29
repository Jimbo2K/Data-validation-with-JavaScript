/*Author: Pablo Garrido
Date: 28/06/2016
Developed with Sublime Text 3*/

/********** NUMBER VALIDATIONS/VALIDACIONES NUMÉRICAS **********/

/***** FLOAT NUMBERS *****/

/*Float (positive or negative) number validation
Validación de número real, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true id pnum is a float number (integer numbers are also considered float), else false
function validaNum(pnum) {
	var aux1, aux2, salida;
	//pnum IS NOT a number? / ¿pnum NO ES un número?
	aux1=isNaN(pnum);
	//pnum is ' ' or ''? / ¿pnum es ' ' ó ''?
	//isNaN() considers '' and ' ' as numbers / isNaN() considera '' y ' ' como números
	aux2=Boolean(aux1===' ' || aux1==='');
	/*if one of the 2 conditions/vars are true, pnum isn't a VALID number /
	  si una de las 2 condiciones/variables es cierta, pnum no es un número válido*/
	if (aux1 || aux2) {salida=false;}
	else {salida=true;}
	return salida;
}

/*Float (positive or negative) number validation
Validación de número real, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is a float number (integer numbers are also considered float), else false
function stringIsFloat(pnum) {
	//rexp (\s*)='',' ','  '... ; (-?)='','-' ; (\d+)='x','xx'... ; (\.?)='','.' ; (\d*)='','x','xx'... ; x=[0-9]
	var rexp=/^\s*(?:-?\d+\.?\d*)\s*$/;
	/*regexp.exec(string) returns an array if the regexp is found in the string, else it will return null /
	regexp.exex(string) devuelve un array si encuentra la expresión en la cadena, si no devuelve null*/
	//Boolean(array)=true; Boolean(null)=false
	var salida=Boolean(rexp.exec(pnum));
	return salida;
}

/***** INTEGER NUMBERS *****/

/*Integer (positive or negative) number validation
Validación de número entero, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an integer number, else false
function validaInt(pnum){
	var aux1, aux2, aux3;
	aux1=isNan(pnum);
	aux2=Boolean(aux1===' ' || aux1==='');
	//12.37 - parseInt(12.37) === (12.37 - 12) = 0.37 !== 0 - float
	//12 - parseInt(12) === (12 - 12) === 0 - int
	aux3=Boolean(pnum - parseInt(pnum) !== 0);
	if (aux1 || aux2 || aux3) {salida=false;}
	else {salida=true;}
	return salida;
}

/*Integer (positive or negative) number validation
Validación de número entero, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an integer number, else false
function stringIsInt(pnum) {
	var rexp=/^\s*(?:-?\d+)\s*$/;
	var salida=Boolean(rexp.exec(pnum));
	return salida;
}

/*Positive integer number validation
Validación de número entero positivo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an positive integer number, else false
function validaPInt(pnum){
	var aux1, aux2, aux3, aux4;
	aux1=isNan(pnum);
	aux2=(aux1===' ' || aux1==='');
	/*If pnum is a number, is it negative?. If pnum is not a number it doesn't matters /
	Si pnum es un número, ¿es negativo?. Si no es un número da igual*/
	aux3=(!aux2 ? (pnum < 0) : true );
	//12.37 - parseInt(12.37) === (12.37 - 12) = 0.37 !== 0 - float
	//12 - parseInt(12) === (12 - 12) === 0 - int
	aux4=Boolean(pnum - parseInt(pnum) !== 0);
	if (aux1 || aux2 || aux3 || aux4) {salida=false;}
	else {salida=true;}
	return salida;
}

/*Positive integer number validation
Validación de número entero positivo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an positive integer number, else false
function stringIsPInt(pnum) {
	var rexp=/^\s*(?:0*[1-9]+)\s*$/;
	var salida=Boolean(rexp.exec(pnum));
	return salida;
}

/*Negative integer number validation
Validación de número entero negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an integer number, else false
function validaNInt(pnum){
	var aux1, aux2, aux3, aux4;
	aux1=isNan(pnum);
	aux2=(aux1===' ' || aux1==='');
	/*If pnum is a number, is it positive?. If pnum is not a number it doesn't matters /
	Si pnum es un número, ¿es positivo?. Si no es un número da igual*/
	aux3=(!aux2 ? (pnum > 0) : true );
	//12.37 - parseInt(12.37) === (12.37 - 12) = 0.37 !== 0 - float
	//12 - parseInt(12) === (12 - 12) === 0 - int
	aux4=Boolean(pnum - parseInt(pnum) !== 0);
	if (aux1 || aux2 || aux3 || aux4) {salida=false;}
	else {salida=true;}
	return salida;
}

/*Negative integer number validation
Validación de número entero negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an integer number, else false
function stringIsNInt(pnum) {
	var rexp=/^\s*(?:-0*[1-9]+)\s*$/;
	var salida=Boolean(rexp.exec(pnum));
	return salida;
}

/*Integer (positive or negative), integer positive o integer negative number validation
Validación de número entero (positivo o negativo), entero positivo o entero negativo*/
//ARG: pnum (string or number value) ; OPTIONAL psign (none or no valid value, pnum can be +/- ; 1 pnum +int ; -1 pnum -int)
//OUTPUT: true if pnum is an valid integer number, else false
function validInt(pnum, psign) {
	/*We supose pnum can be positive or negative /
	Suponemos que pnum puede ser positico o negativo*/
	var rexp=/^\s*(?:-?\d+)\s*$/;
	/*if psign=1 we look for positive numbers /
	si psign=1 buscamos números positivos*/
	if (psign===1){rexp=/^\s*(?:0*[1-9]+)\s*$/;}
	/*if psign=-11 we look for negative numbers /
	si psign=-11 buscamos números negativos*/
	else if(psing===-1){rexp=/^\s*(?:-0*[1-9]+)\s*$/;}
	var salida=Boolean(rexp.exec(pnum));
	return salida;
}