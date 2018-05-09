var boton = document.getElementById("btn");
var text= document.getElementById("usuario");

var txt="   Diseñadora de wed";
var espera=140;
var refresco=null;
function rotulo_title(){
	document.title=txt;
	txt=txt.substring(1, txt.length)+txt.charAt(0);
	refresco=setTimeout("rotulo_title()",espera);
}
rotulo_title();



