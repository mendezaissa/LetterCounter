function countLetters(obj)
{
	//gathers the length of the string inside the textbox
	var x = "Letter Count: " + obj.value.length;

	document.getElementById("display").innerHTML = x;

}