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
  console.log('tagname '+tagOfElement+ ' id '+idOfElement);
  var strFunction;
  /*If the event has been generated from a button launch the fucntion
  Si el evento lo ha generado un botón lanza la función*/
  if (tagOfElement==='BUTTON'){
  	strFunction=idOfElement.replace('bot',''); //remove the 'bot' from button's id
  	eval(strFunction+'();'); // launch the function
  }
}

function borraSpan() {
	var salidas=document.getElementsByTagName('SPAN');
	var i;
	for (i in salidas) {
		salidas[i].innerHTML='';
	}
}

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