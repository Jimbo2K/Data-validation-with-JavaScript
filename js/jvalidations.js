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
	aux2=Boolean(pnum===' ' || pnum==='');
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
	aux2=Boolean(pnum===' ' || pnum==='');
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
	aux2=Boolean(pnum===' ' || pnum==='');
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
	/*if psign=-1 we look for negative numbers /
	si psign=-1 buscamos números negativos*/
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

/***** HEX *****/

/*Validates a string as an hexadecimal number
Valida una cadena como numero hexadecimal*/
//ARG: pnum
//OUTPUT: true if pnum is an HEX number, else false;
function stringIsHex (pnum) {
	var rexp=/^\s*(?:\#[0-9a-fA-F]{3}|\#[0-9a-fA-F]{6}|[0-9a-fA-F]+)\s*$/; //This reg. exp. admits hexadecimal numbers and hexadecimal colors (#xyz #xxyyzz)
	if (!rexp.test(pnum)){
		return false;
	}
	return true;
}

/***** ISBN *****/

/*Validates an ISBN10 number / Valida un nro. ISBN10*/
//ARG: pisbn (string or number)
//OUTPUT: true if pisbn is an ISBN10 number, else false
function codeIsbn10(pisbn){
	var i, cod=0, aux;
	/*Regexp for ISBN10 format / Regexp para formato ISBN10*/
	var reisbn=/^\s*\d{9}[0-9xX]{1}\s*?/;
	/*ISBN10 control digit can be an 'x' or 'X' so I make sure to convert it to 'x'
	El dígito de control de ISBN10 puede ser 'x' o 'X' por lo que me aseguro de que sea 'x'*/
	aux=pisbn.toLowerCase().trim(); //trim() removes spaces at the beguinning and end

	/*Check if the argument has an ISBN10 format / comprueba si el argumento tiene formato ISBN10*/
	if (reisbn.test(aux)){
		/***** Calculation algorithm 10th check digit / Algoritmo de cálculo del 10º dígito de control *****/
		for (i=0; i<(aux.length-1);i++){
			cod = cod + Number(aux[i])*(i+1); //Number() used to ensure we are working with a number instead of a string
		}
		cod=cod%11;
		if (cod==10){cod='x';}
		/**********************************************************/

		/*Check if the 10th digit is the correct control number
		Compruebo si el 10º dígito es el el nro. de control correcto*/
		if(cod==aux[aux.length-1]){
			return true;
		}
	}
	/*If pisbn hasn't the correct format or control digit validation retursn false
	Si pisb no tiene el formato correcto o el nro de control válido devuelve false*/
	return false;
}

/*Validates an ISBN13 number / Valida un nro. ISBN13*/
//ARG: pisbn (string or number)
//OUTPUT: true if pisbn is an ISBN13 number, else false
function codeIsbn13(pisbn){
	var j,cod=0;
	var reisbn=/^\s*\d{13}\s*?/;
	/*Regexp for ISBN10 format / Regexp para formato ISBN10*/
	var aux=pisbn.trim(); //trim() removes spaces at the beguinning and end

	/*Check if the argument has an ISBN13 format / comprueba si el argumento tiene formato ISBN13*/
	if (reisbn.test(aux)){
		/***** Calculation algorithm 130th check digit / Algoritmo de cálculo del 13º dígito de control *****/
		for (j=1;j<=12;j=j+2){
			cod=cod + Number(aux[j])*3 + Number(aux[j-1]);//Number() used to ensure we are working with a number instead of a string
		}
		cod=10-(cod%10);
		/**********************************************************/

		/*Check if the 13th digit is the correct control number
		Compruebo si el 13º dígito es el el nro. de control correcto*/
		if(cod==Number(pisbn[pisbn.length-1])){
			return true;
		}
	}
	/*If pisbn hasn't the correct format or control digit validation retursn false
	Si pisb no tiene el formato correcto o el nro de control válido devuelve false*/
	return false;
}

/*Validates an ISBN number (ISBN10 or ISBN13) / Valida un nro. ISBN (ISBN10 o ISBN13)*/
//ARG: pisbn (string or number)
//OUTPUT: true if pisbn is an ISBN number, else false
function codeIsbn(pisbn){
	var aux=pisbn.trim(); //trim() removes spaces at the beguinning and end

	if (aux.length()===10){
		return codeIsbn10(aux);
	}
	else if (aux.length()===13){
		return codeIsbn13(aux);
	}

	/*If argument hasn't the right length return false
	Si el argumento no tiene la longitud correcta devuelve false*/
	return false;
}

/***** DATE NUMBERS / NÚMEROS DE FECHA *****/

/*This function validates a string as a year with an 'A.D.' format (not the Js Date Object format)
Esta función valida una cadena como año en formato 'A.D.' (no el formato del Objeto Date Js)*/
//ARG: pyear (string)
//OUTPUT: true if pyear is valid
function stringIsYear(pyear){
	var reyear=/^\s*[0-9]{1,4}\s?(?:[AadDbB]\.[DdCc]\.)?\s*$/;
	if (reyear.test(pyear)) {
		return true;
	}
	return false;
}

/*This function validates a string which can have several date formats
Esta función valida una cadena que puede tener distintos formatos de fecha*/
//ARG: pdate (string) = dd[' '/-_]mm[' '/-_]yyyy; page (boolean) is optional, if true the date must be a birth date
//OUTPUT: array=[true/false,empty value/wrong date,wrong day,wrong month,wrong year]
function stringIsDate(pdate,page){
	if (page===undefined){page=false;}
	var aux=pdate.trim();
	var arraux;
	var out=[undefined,'','','',''];
	var redate=/^[0-9]{1,2}[\s\/\\-\_\.]+[0-9]{1,2}[\s\/\\-\_\.]+[0-9]{4}?/;
	/*If pdate is empty it is invalid / Si pdate está vacío, es inválido*/
	if (aux===''){
		out[0]=false;
		out[1]='-Campo vacío';//out=[false,' Empty value']
	}
	/*If not, we have to continue checking / Si no, seguimos comprobando*/
	else{
		/*Suposing there are separators we extract day, month and year from the string
		Suponiendo que hay separadores extraemos día, mes y año de la cadena*/
		arraux=aux.split(findSep(aux));
		var pday=arraux[0];
		var pmonth=arraux[1];
		var pyear=arraux[2];

		/*Actual date / fecha actual*/
		var actualDate=new Date();
		var ayear=actualDate.getFullYear();

		/*pdate can have a valid format but still we have to check if it's a valid date
		pdate puede tener un formato correcto pero debemos asegurar que es una fecha válida*/
		if (redate.test(aux)){
			/*We create a Date object width datas from the argument
			Creamos un objeto Date con los datos del argumento*/
			var rdate=new Date(pyear,pmonth-1,pday);
			var rday=rdate.getDate(); //Real day

			out[3]='';

			/*pday can have a valid format but not a valid value
			pday puede tener un formato válido pero no ser válido*/
			//(31/09/1998=01/10/1998, 31 != 01)
			if (Number(pday)!==rday){
				out[0]=false;
				out[1]='-Fecha incorrecta:';
				out[2]='-Día no válido (no corresponde al mes);';
			}
			/*If we look for a date of birth the year can't be higher than actual
			Si buscamos una fecha de nacimiento el año no puede ser mayor que el actual*/
			if (page && (Number(pyear)>ayear)){
				out[0]=false;
				out[1]='-Fecha incorrecta:';
				out[4]='-Año no válido (mayor que '+ayear+')';
			}
			/*If format and datas are valid*/
			if (out[0]===undefined) {
				out[0]=true;
				out.length=1;//erases every possible error messages
			}

		}
		/*If pdate has no valid format we have to find what's wrong width it
		Si pdate no tiene un formato válido tenemos que ver que falla*/
		else {
			/*pdate is not valid but, why? / pdate no es válido pero, ¿por qué?*/
			out[0]=false;
			/*If the pdate argument is taken from 3 different inputs, probably the string won't be empty because several separators have been added,
			but the date `must be empty.
			Si pdate se ha obtenido de 3 inputs, probablemente la cadena no esté vacía porque se han añadido separadores pero la fecha estará vacía*/
			out[1]='-Fecha vacía';
			/*There are no gaps between day, month and year
			No hay separadores entre los datos*/
			if (findSep(aux)===''){
				out[1]='-Fecha incorrecta: introduzca día/mes/año separados';
			}
			/*If there are gaps, continue checking / si hay huecos continuamos chequeando*/
			else {
				/*If what must be the day is not a number or it's higher than 31
				Si lo que suponemos el día no es un número o es mayor que 31*/
				if ((isNaN(pday)) || (Number(pday)>31)){
					out[1]='-Fecha incorrecta:';
					out[2]='-Día no válido (1 a 31);';
				}
				/*If what must be the month is not a number or it's higher than 12
				Si lo que suponemos el mes no es un número o es mayor que 12*/
				if ((isNaN(pmonth)) || (Number(pmonth)>12)){
					out[1]='-Fecha incorrecta:';
					out[3]='-Mes no válido (1 a 12);';
				}
				/*If what must be the year is not a number or, if we're looking for a birth date, it's higher than actual year
				Si lo que suponemos el mes no es un número o es mayor que 12*/
				if ((isNaN(pyear)) || (Number(pyear)>ayear && page)){
					out[1]='-Fecha incorrecta:';
					/*(page ? exp1 : '') if page=true out[2]=" Not valid year (higher than <actual year>)" else out[2]=" Not valid year"*/
					out[4]='-Año no válido' + (page ? ' (mayor que '+ayear+')' : '');
				}
			}
		}
	}
	return out;
}

/***** TELEPHONE NUMBERS *****/

/*This function checks if a string is a valid fixed telphone number from an european country (actually it works for Spain, France, Ireland and
Italy). If the country is not given as an argument, the code check the language from the browser to chose it. If the chosen country is not available
the function will use Spain as default.
Esta función chequea si una cadena es un teléfono fijo valido de un pais europeo (actualmente soporta España, Francia, Irlanda e Italia). Si no
se le pasa el pais como argumento, lo toma del lenguaje del navegador. Si el país elegido no está disponible se utilizará España por defecto.*/
//ARG: ptel (string); pcountry (string) is optional and must be one of the languaje identifications code (http://www.metamodpro.com/browser-language-codes)
function fixedPhone(ptel,pcountry) {
	/*The object ' fixedlines ' contains regular expressions to validate strings with fixed telephone numbers in different countries /
	El objeto 'fixedlines' contiene expresiones regulares para validar cadenas con números de teléfono fijos de distintos paises*/
	var fixedlines = {};
	fixedlines.spain=/^\s*\(?(?:(00|\+)34)?\)?[-\/\s]?\d{2,3}[-\/\s]?(?:(\d{3}[-\/\s]?\d{3})|(\d{2}[-\/\s]?\d{2}[-\/\s]?\d{2}))\s*$/;
	fixedlines.france=/^\s*\(?(?:(00|\+)33)?\)?[-\/\s]?0?\d[-\/\s]?\d{2}[-\/\s]?\d{2}[-\/\s]?\d{2}[-\/\s]?\d{2}\s*$/;
	fixedlines.ireland=/^\s*\(?(?:(0|\+)353)?\)?[-\/\s]?0\d{1,5}[-\/\s]?(?:(\d{3}[-\/\s]?\d{3})|(\d{4,6}))\s*$/;
	fixedlines.italy=/^\s*\(?(?:(00|\+)39)?\)?[-\/\s]?06[-\/\s]?\d{8}\s*$/;
	/*Available countries / paises disponibles*/
	var languages = ['es','fr-fr','ie','it']; //en-gb Great Britain / de-de Germany / pt Potuguese ...

	var langval = pcountry;
	var relangval;
	/*If argument pcountry is not used langval will be chosed from the browser language
	Si no se utiliza el argumento pcountry se toma el lenguaje del navegador*/
	var brwlang = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
	brwlang=brwlang.toLowerCase();
	if (pcountry===undefined || pcountry==='' ) {
		for (var i=0; i<languages.length; i++){
			var langcheck= new RegExp(languages[i]);
			if (langcheck.test(brwlang)){
				langval=languages[i];
			}
		}
	}
	switch (langval) {
		case 'es':
			relangval=fixedlines.spain;
			break;
		case 'fr-fr':
			relangval=fixedlines.france;
			break;
		case 'ie':
			relangval=fixedlines.ireland;
			break;
		case 'it':
			relangval=fixedlines.italy;
			break;
		default:
			relangval=fixedlines.spain;
			break;
	}
	return relangval.test(ptel);
}

/********** TEXT VALIDATIONS/VALIDACIONES DE TEXTO **********/

/***** STRING TOOLS / HERRAMIENTAS PARA STRINGS *****/

/*This function cleans a string that has been given as an argument, leaving only text characters, without numbers
or symbols. In this case text characters are from spanish language.
Esta función limpia una cadena pasada como argumento dejando sólo caracteres de texto, sin números o símbolos.
En este caso los caracteres pertenecen al español*/
//ARG: pstring (string)
function onlyText(pstring){
	var retext=/[a-zñA-ZÑáéíóúÁÉÍÓÚüÜ\s]/;//reg exp to check each character from the pstring
	var i,aux=pstring;
	/*This will cover the entire string, checking every character and eliminating the incorrect ones.
	Esto recorrerá toda la cadena, comprobando todos los caracteres y eliminando los incorrectos*/
	for (i=0;i<aux.length;i++){
		if (!retext.test(aux[i])){//aux="abcd$efg%" i=4 aux[i]="$" aux.length=9 ... aux="abcdefg$" i=7 aux[i]="%" aux.length=8
			aux=aux.replace(aux[i],'');//erase first char=aux[i]="$" aux="abcdefg%" ... erase first "%" aux="abcdefg"
		}
	}
	return aux;
}

/*This function returns the symbol which has been used for gaps in a string. We supose that the string has no other symbols
Esta función devuelve el símbolo utilizado como separador en una cadena. Suponemos que la cadena no tiene otros símbolos*/
//ARG: pstring (string)
//OUTPUT: string, "12/15/2016" -> "/"
function findSep(pstring){
	var resep=/[\s\/\\-\_]/;
	var i=pstring.search(resep);
	if (i===-1){
		return '';
	}
	return pstring[i];
}

/***** NAMES / NOMBRES *****/

/*A name (first or/and surnames) can't use numbers or symbols to be validated
Un nombre (de pila o/y apellidos) no puede contener números o símbolos*/
//ARG: pname (string)
function stringIsName(pname){
	var reforbidden = /[\d\!\¡\?\¿@\/\\\^\*#\|\%\+\=\[\]\{\}\_\:;,\$]/;
	/*If pname=[null,undefined,""] or has forbidden symbols return false
	Si pname=[null,undefined,""] o contiene símbolos prohibidos devuelve false*/
	if (!pname || reforbidden.test(pname)){
		return false;
	}
	return true;
}

/***** EMAIL *****/

/*This function ONLY validates basic email formats, doesn't check valid domains nor if the email really exists
Esta función sólo valida el formato básico de emails, no chequea la valided de dominios o si el email existe*/
//ARG: pemail (string)
function stringIsEmail(pemail){
	var reemail=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/; //admits 4 characters domains
	/*Transforms the string to lower case and removes spaces at the beguinning and end
	Pasa la cadena a minúsculas y elimina espacios al principio y final*/
	var aux=pemail.toLowerCase().trim();
	if (reemail.test(aux)){
		return true;
	}
	return false;
}