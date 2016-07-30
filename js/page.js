document.getElementById('btnlang').onclick=function(){
	var btnn=document.getElementById('btnlang');
	var htitle=document.getElementById('htitle');
	var i;
	var arrmenuspn=['Funciones con JavaScript','Descargar Jvalidations','El código de JValidations','Funciones integradas en JValidations','Banco de pruebas'];
	var arrmenueng=['Functions with JavaScript','JValidations Download','JValidations Code','JValidations functions','Workbench'];
	//Si paso de Inglés a Español
	if (btnn.innerHTML==='en Español') {
		//Oculto el contenedor del texto en inglés y muestro el de español
		document.getElementById('eng-page').setAttribute('class', 'page-hidden');
		document.getElementById('spn-page').setAttribute('class', 'page-show');
		//El botón que muestra el idioma ahora "in English"
		btnn.innerHTML='to English';
		btnn.setAttribute('title', 'change to English language');
		//Cambio el encabezado
		htitle.innerHTML='JValidations: Validación de datos con JavaScript';
		//Cambio el destino de los enlaces del menú y su texto
		for (i=1;i<6;i++){
			document.getElementById('mn'+i).setAttribute('href', '#mn'+i+'spn');
			document.getElementById('mn'+i).innerHTML=arrmenuspn[i-1];
		}
	} else {
		document.getElementById('spn-page').setAttribute("class", "page-hidden");
		document.getElementById('eng-page').setAttribute("class", "page-show");
		btnn.innerHTML='en Español';
		btnn.setAttribute('title', 'cambia a español');
		htitle.innerHTML='JValidations: Data validation with JavaScript';
		for (i=1;i<6;i++){
			document.getElementById('mn'+i).setAttribute('href', '#mn'+i+'eng');
			document.getElementById('mn'+i).innerHTML=arrmenueng[i-1];
		}
	}
};

document.getElementById('btn-menu').onclick=function(){
	var menu=document.getElementById('menu');
	var clase=menu.getAttribute('class');
	if (clase==='menuin') {
		menu.setAttribute('class', 'menuout');
	} else {
		menu.setAttribute('class', 'menuin');
	}
};

document.body.onmousedown=function(){
	eventClick(event);
};

function eventClick(e){
	var tagOfElement;
	var idOfElement;
	if (e.srcElement) {
	 	tagOfElement = e.srcElement.tagName;
	 	idOfElement = e.srcElement.id;
	}
  else if (e.target) {
    tagOfElement = e.target.tagName;
    idOfElement = e.target.id;
  }
  var strFunction;
  if (tagOfElement==='A'){
  	var menu=document.getElementById('menu');
		var clase=menu.getAttribute('class');
		if (clase==='menuin') {
			menu.setAttribute('class', 'menuout');
		} else {
			menu.setAttribute('class', 'menuin');
		}
  }
}