/*****************************************/
/*********** Events / eventos ************/
/*****************************************/

/*When event mouse down on the body is detected eventClick is called
Cuando se detecta el vento de botón de ratón pulsado sobre body, se llama a eventClick*/
document.body.onmousedown=function(){
	eventClick(event);//event is an object with the information about who generated th event
};

/*This function check an event and, in case it has been generated by a button, searchs it and
launch a function asociated with it.
Esta función chequea un evento y, en caso de ser originado por un btón, lo busca y lanza una
función asociada a él.*/
/*NOTE: button id must be 'bot'+<name of the funtion>
NOTA: el id del botón debe ser 'bot'+<nombre de la función>*/
function eventClick(e){
	var tagOfElement;
	var idOfElement;
	/*srcElement is used in IE to assign as the element that has generated the last event
	srcElement es usado por IE para asignar el elemento que ha generado el último evento*/
	if (e.srcElement) {
	 	tagOfElement = e.srcElement.tagName;
	 	idOfElement = e.srcElement.id;
	}
	/*target is the same that srcElement but for other browsers
	target es igual que srcElement pero para otros navegadores*/
  else if (e.target) {
    tagOfElement = e.target.tagName;
    idOfElement = e.target.id;
  }
  var strFunction;
  /*If the event has been generated from a button launch the fucntion
  Si el evento lo ha generado un botón lanza la función*/
  if (tagOfElement==='BUTTON'){
  	strFunction=idOfElement.replace('bot',''); //remove the 'bot' from button's id
  	// eval(strFunction+'();'); // launch the function
  	switch (strFunction) {
  		case 'int1':
  			int1();
  			break;
  		case 'int2':
  			int2();
  			break;
  		case 'int3':
  			int3();
  			break;
  		case 'int4':
  			int4();
  			break;
  		case 'int5':
  			int5();
  			break;
  		case 'int6':
  			int6();
  			break;
  		case 'int7':
  			int7();
  			break;
  		case 'float1':
  			float1();
  			break;
  		case 'float2':
  			float2();
  			break;
  		case 'float3':
  			float3();
  			break;
  		case 'float4':
  			float4();
  			break;
  		case 'float5':
  			float5();
  			break;
  		case 'float6':
  			float6();
  			break;
  		case 'float7':
  			float7();
  			break;
  		case 'hex1':
  			hex1();
  			break;
  		case 'isbn1':
  			isbn1();
  			break;
  		case 'isbn2':
  			isbn2();
  			break;
  		case 'isbn3':
  			isbn3();
  			break;
  		case 'date1':
  			date1();
  			break;
  		case 'date2':
  			date2();
  			break;
  		case 'phone1':
  			phone1();
  			break;
  	}
  }
}

document.getElementById('radio1').onclick=function() {
	this.setAttribute('checked', true);
	document.getElementById('radio2').setAttribute('checked', false);
};

document.getElementById('radio2').onclick=function() {
	this.setAttribute('checked', true);
	document.getElementById('radio1').setAttribute('checked', false);
};

/*****************************************/
/***** Aux functions / Funciones aux *****/
/*****************************************/

function borraSpan() {
	var salidas=document.getElementsByTagName('SPAN');
	var aux=salidas[0];
	var i,index;
	for (i=0; i<salidas.length; i++) {
		index=salidas[i].id.indexOf('out');
		if (index!==-1){
			salidas[i].innerHTML='';
		}
	}
	document.getElementById('datemens').value='';
}

/*****************************************/
/**** Test functions / funciones test ****/
/*****************************************/

function int1(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out1');
	salida.innerHTML=validInt1(campo.value);
}

function int2(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out2');
	salida.innerHTML=stringIsInt(campo.value);
}

function int3(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out3');
	salida.innerHTML=validPInt(campo.value);
}

function int4(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out4');
	salida.innerHTML=stringIsPInt(campo.value);
}

function int5(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out5');
	salida.innerHTML=validNInt(campo.value);
}

function int6(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out6');
	salida.innerHTML=stringIsNInt(campo.value);
}

function int7(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out7');
	var arg=document.getElementById('sign');
	salida.innerHTML=validInt(campo.value,arg.value);
}

function float1(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out8');
	salida.innerHTML=validFloat1(campo.value);
}

function float2(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out9');
	salida.innerHTML=stringIsFloat(campo.value);
}

function float3(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out10');
	salida.innerHTML=validPFloat(campo.value);
}

function float4(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out11');
	salida.innerHTML=stringIsPFloat(campo.value);
}

function float5(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out12');
	salida.innerHTML=validNFloat(campo.value);
}

function float6(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out13');
	salida.innerHTML=stringIsNFloat(campo.value);
}

function float7(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out14');
	var arg=document.getElementById('sign2');
	salida.innerHTML=validFloat(campo.value,arg.value);
}

function hex1(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out16');
	salida.innerHTML=stringIsHex(campo.value);
}

function isbn1(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out17');
	salida.innerHTML=codeIsbn10(campo.value);
}

function isbn2(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out18');
	salida.innerHTML=codeIsbn13(campo.value);
}

function isbn3(){
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out19');
	salida.innerHTML=codeIsbn(campo.value);
}

function date1(){
	var chkopt=document.getElementById('radio1').checked;
	var cadenaFecha;
	var edad;
	var salida;
	var i;
	/*Según la opción elegida se obtiene la fecha de uno o tres campos*/
	if (chkopt){
		cadenaFecha=document.getElementById('value2').value;
	} else {
		cadenaFecha=document.getElementById('value3_1').value+'/'+document.getElementById('value3_2').value+'/'+document.getElementById('value3_3').value;
	}
	/*Según se seleccione o no el checkbox la fecha corresponde o no a una edad (fecha de nacimiento)*/
	edad=document.getElementById('edad').checked;
	salida=stringIsDate(cadenaFecha,edad);
	document.getElementById('datemens').value='';
	for (i in salida){
		if (salida[i]!=='') {//No escribo los mensajes vacíos
			document.getElementById('datemens').value+=salida[i] + '\n';
		}
	}
}

function date2() {
	var campo=document.getElementById('value1');
	var salida=document.getElementById('out20');
	salida.innerHTML=stringIsYear(campo.value);
}

function phone1(){
	var numerotel=document.getElementById('telefono').value;
	var pais=document.getElementById('pais').value;
	var salida=document.getElementById('out15');
	salida.innerHTML=fixedPhone(numerotel,pais);
}