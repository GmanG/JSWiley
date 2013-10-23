$(document).ready(function(){
	var date = new Date();
	// if use method append, for method html it's not necessary
	$('#outputJquery').text(" ");
	$('#outputJquery').append(date.toLocaleString());
});