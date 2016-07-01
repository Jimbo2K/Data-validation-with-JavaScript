/*Author: Pablo Garrido
Date: 28/06/2016
Developed with Sublime Text 3*/

/********** NUMBER VALIDATIONS/VALIDACIONES NUMÉRICAS **********/

/***** FLOAT NUMBERS *****/

/*Float (positive or negative) number validation
Validación de número real, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is a float number (integer numbers are also considered float), else false
function validFloat1(pnum) {
	var aux1, aux2, out;
	//pnum IS NOT a number? / ¿pnum NO ES un número?
	aux1=isNaN(pnum);
	//pnum is ' ' or ''? / ¿pnum es ' ' ó ''?
	//isNaN() considers '' and ' ' as numbers / isNaN() considera '' y ' ' como números
	aux2=Boolean(aux1===' ' || aux1==='');
	/*if one of the 2 conditions/vars are true, pnum isn't a VALID number /
	  si una de las 2 condiciones/variables es cierta, pnum no es un número válido*/
	if (aux1 || aux2) {out=false;}
	else {out=true;}
	return out;
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
	var out=Boolean(rexp.exec(pnum));
	return out;
}

/*Positive float number validation
Validación de número real positivo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is a positive float number (integer numbers are also considered float), else false
function validPFloat(pnum) {
	var aux1, aux2, aux3, out;
	//pnum IS NOT a number? / ¿pnum NO ES un número?
	aux1=isNaN(pnum);
	//pnum is ' ' or ''? / ¿pnum es ' ' ó ''?
	//isNaN() considers '' and ' ' as numbers / isNaN() considera '' y ' ' como números
	aux2=Boolean(aux1===' ' || aux1==='');
	/*If pnum is a number, is it negative?. If pnum is not a number it doesn't matters /
	Si pnum es un número, ¿es negativo?. Si no es un número da igual*/
	aux3=(!aux2 ? (pnum < 0) : true );
	/*if one of the 2 conditions/vars are true, pnum isn't a VALID number /
	  si una de las 2 condiciones/variables es cierta, pnum no es un número válido*/
	if (aux1 || aux2 || aux3) {out=false;}
	else {out=true;}
	return out;
}

/*Positive float number validation
Validación de número real positivo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is a positive float number (integer numbers are also considered float), else false
function stringIsPFloat(pnum) {
	var rexp=/^\s*(?:\d+\.?\d*)\s*$/;
	var out=Boolean(rexp.exec(pnum));
	return out;
}

/*Negative float number validation
Validación de número real negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is a negative float number (integer numbers are also considered float), else false
function validNFloat(pnum) {
	var aux1, aux2, aux3, out;
	//pnum IS NOT a number? / ¿pnum NO ES un número?
	aux1=isNaN(pnum);
	//pnum is ' ' or ''? / ¿pnum es ' ' ó ''?
	//isNaN() considers '' and ' ' as numbers / isNaN() considera '' y ' ' como números
	aux2=Boolean(aux1===' ' || aux1==='');
	/*If pnum is a number, is it positive?. If pnum is not a number it doesn't matters /
	Si pnum es un número, ¿es positivo?. Si no es un número da igual*/
	aux3=(!aux2 ? (pnum > 0) : true );
	/*if one of the 2 conditions/vars are true, pnum isn't a VALID number /
	  si una de las 2 condiciones/variables es cierta, pnum no es un número válido*/
	if (aux1 || aux2 || aux3) {out=false;}
	else {out=true;}
	return out;
}

/*Negative float number validation
Validación de número real negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is a negative float number (integer numbers are also considered float), else false
function stringIsNFloat(pnum) {
	var rexp=/^\s*(?:-\d+\.?\d*)\s*$/;
	var out=Boolean(rexp.exec(pnum));
	return out;
}

/*Float (positive or negative), float positive or float negative number validation
Validación de número real (positivo o negativo), real positivo o real negativo*/
//ARG: pnum (string or number value) ; OPTIONAL psign (none or no valid value, pnum can be +/- ; 1 pnum +float ; -1 pnum -float)
//OUTPUT: true if pnum is an valid float number, else false
function validFloat(pnum, psign) {
	/*We supose pnum can be positive or negative /
	Suponemos que pnum puede ser positico o negativo*/
	var rexp=/^\s*(?:-?\d+\.?\d*)\s*$/;
	/*if psign=1 we look for positive numbers /
	si psign=1 buscamos números positivos*/
	if (psign==1){rexp=/^\s*(?:\d+\.?\d*)\s*$/;} //Use psign==1 instead of psign===1, because 1 is is not strictly equal to to '1'
	/*if psign=-11 we look for negative numbers /
	si psign=-11 buscamos números negativos*/
	else if(psign==-1){rexp=/^\s*(?:-\d+\.?\d*)\s*$/;} //Use psign==-1 instead of psign===-1, because 1 is is not strictly equal to to '1'
	var out=Boolean(rexp.exec(pnum));
	return out;
}

/***** INTEGER NUMBERS *****/

/*Integer (positive or negative) number validation
Validación de número entero, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an integer number, else false
function validInt1(pnum){
	var aux1, aux2, aux3;
	aux1=isNaN(pnum);
	aux2=Boolean(aux1===' ' || aux1==='');
	//12.37 - parseInt(12.37) === (12.37 - 12) = 0.37 !== 0 - float
	//12 - parseInt(12) === (12 - 12) === 0 - int
	aux3=Boolean(pnum - parseInt(pnum) !== 0);
	if (aux1 || aux2 || aux3) {out=false;}
	else {out=true;}
	return out;
}

/*Integer (positive or negative) number validation
Validación de número entero, positivo o negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an integer number, else false
function stringIsInt(pnum) {
	var rexp=/^\s*(?:-?\d+)\s*$/;
	var out=Boolean(rexp.exec(pnum));
	return out;
}

/*Positive integer number validation
Validación de número entero positivo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an positive integer number, else false
function validPInt(pnum){
	var aux1, aux2, aux3, aux4;
	aux1=isNaN(pnum);
	aux2=(aux1===' ' || aux1==='');
	/*If pnum is a number, is it negative?. If pnum is not a number it doesn't matters /
	Si pnum es un número, ¿es negativo?. Si no es un número da igual*/
	aux3=(!aux2 ? (pnum < 0) : true );
	//12.37 - parseInt(12.37) === (12.37 - 12) = 0.37 !== 0 - float
	//12 - parseInt(12) === (12 - 12) === 0 - int
	aux4=Boolean(pnum - parseInt(pnum) !== 0);
	if (aux1 || aux2 || aux3 || aux4) {out=false;}
	else {out=true;}
	return out;
}

/*Positive integer number validation
Validación de número entero positivo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an positive integer number, else false
function stringIsPInt(pnum) {
	var rexp=/^\s*(?:0*[1-9]+)\s*$/;
	var out=Boolean(rexp.exec(pnum));
	return out;
}

/*Negative integer number validation
Validación de número entero negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an integer number, else false
function validNInt(pnum){
	var aux1, aux2, aux3, aux4;
	aux1=isNaN(pnum);
	aux2=(aux1===' ' || aux1==='');
	/*If pnum is a number, is it positive?. If pnum is not a number it doesn't matters /
	Si pnum es un número, ¿es positivo?. Si no es un número da igual*/
	aux3=(!aux2 ? (pnum > 0) : true );
	//12.37 - parseInt(12.37) === (12.37 - 12) = 0.37 !== 0 - float
	//12 - parseInt(12) === (12 - 12) === 0 - int
	aux4=Boolean(pnum - parseInt(pnum) !== 0);
	if (aux1 || aux2 || aux3 || aux4) {out=false;}
	else {out=true;}
	return out;
}

/*Negative integer number validation
Validación de número entero negativo*/
//ARG: pnum (string or number value)
//OUTPUT: true if pnum is an integer number, else false
function stringIsNInt(pnum) {
	var rexp=/^\s*(?:-0*[1-9]+)\s*$/;
	var out=Boolean(rexp.exec(pnum));
	return out;
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
	if (psign==1){rexp=/^\s*(?:0*[1-9]+)\s*$/;} //Use psign==1 instead of psign===1, because 1 is is not strictly equal to to '1'
	/*if psign=-11 we look for negative numbers /
	si psign=-11 buscamos números negativos*/
	else if(psign==-1){rexp=/^\s*(?:-0*[1-9]+)\s*$/;} //Use psign==-1 instead of psign===-1, because 1 is is not strictly equal to to '1'
	var out=Boolean(rexp.exec(pnum));
	return out;
}

/***** TELEPHONE NUMBERS *****/
//GLOBAL VARIABLES / VARIABLES GLOBALES

/*OThe object ' fixedlines ' contains regular expressions to validate strings with fixed telephone numbers in different countries /
El objeto 'fixedlines' contiene expresiones regulares para validar cadenas con números de teléfono fijos de distintos paises*/
var fixedlines = {};
fixedlines.spain=/^\s*\(?(?:(00|\+)34)?\)?[-\/\s]?\d{2,3}[-\/\s]?(?:(\d{3}[-\/\s]?\d{3})|(\d{2}[-\/\s]?\d{2}[-\/\s]?\d{2}))\s*$/;
fixedlines.france=/^\s*\(?(?:(00|\+)33)?\)?[-\/\s]?0?\d[-\/\s]?\d{2}[-\/\s]?\d{2}[-\/\s]?\d{2}[-\/\s]?\d{2}\s*$/;
fixedlines.ireland=/^\s*\(?(?:(0|\+)353)?\)?[-\/\s]?0\d{1,5}[-\/\s]?(?:(\d{3}[-\/\s]?\d{3})|(\d{4,6}))\s*$/;
fixedlines.italy=/^\s*\(?(?:(00|\+)39)?\)?[-\/\s]?06[-\/\s]?\d{8}\s*$/;

