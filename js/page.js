document.getElementById('btnlang').onclick=function(){
	var btnn=document.getElementById('btnlang');
	if (btnn.innerHTML==='English') {
		document.getElementById('eng-page').setAttribute("class", "page-hidden");
		document.getElementById('spn-page').setAttribute("class", "page-show");
		btnn.innerHTML='Spanish';
	} else {
		document.getElementById('spn-page').setAttribute("class", "page-hidden");
		document.getElementById('eng-page').setAttribute("class", "page-show");
		btnn.innerHTML='English';
	}
}