document.getElementById('btnlang').onclick=function(){
	var btnn=document.getElementById('btnlang');
	var htitle=document.getElementById('htitle');
	if (btnn.innerHTML==='English') {
		document.getElementById('eng-page').setAttribute('class', 'page-hidden');
		document.getElementById('spn-page').setAttribute('class', 'page-show');
		btnn.innerHTML='Spanish';
		btnn.setAttribute('title', 'change to english');
		htitle.innerHTML='JValidations: Validación de datos con JavaScript';
	} else {
		document.getElementById('spn-page').setAttribute("class", "page-hidden");
		document.getElementById('eng-page').setAttribute("class", "page-show");
		btnn.innerHTML='English';
		bttn.setAttribute('title', 'cambia a español');
		htitle.innerHTML='JValidations: Data validation with JavaScript';
	}
};