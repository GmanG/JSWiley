window.onload = insertTimeDate;
function insertTimeDate(){
	var paragraphElmnt = document.getElementsByTagName('p')[0];
	while(paragraphElmnt.firstChild){
		console.log(paragraphElmnt.firstChild);
		paragraphElmnt.removeChild(paragraphElmnt.firstChild);
	}
}