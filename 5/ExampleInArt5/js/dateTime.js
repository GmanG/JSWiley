window.onload = insertTimeDate;
function insertTimeDate(){
	var date = new Date();
	var dateTime = date.toLocaleString();
	var outputElmnt = document.getElementById('output');
	while(outputElmnt.firstChild){
		outputElmnt.removeChild(outputElmnt.firstChild);
	}
	var dateText = document.createTextNode(dateTime);
	outputElmnt.appendChild(dateText);
}