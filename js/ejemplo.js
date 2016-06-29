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