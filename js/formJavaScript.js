window.onload = function () {
	function trimBlankSpaces(string){
		return string.replace(/(^\s*)|(\s*$)/g, "");
	}
	var regExprEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	
	document.getElementById("submitBut").onclick = function() {
		var firstName = document.getElementById("firstName").value;
		var lastName = document.getElementById("lastName").value;
		var eMail = document.getElementById("eMail").value;
		var messageArea = document.getElementById("messageArea").value;
		
		if(trimBlankSpaces(firstName) < 2) {
			alert("Моля въведете валидно име!");
			return false;
		} else if (trimBlankSpaces(lastName) < 2) {
			alert("Моля въведете валидна фамилия!");
			return false;
		} else if(!regExprEmail.test(eMail)) {
			alert("Моля въведете валиден e-mail!");
			return false;
		} else if(trimBlankSpaces(messageArea).length < 5) {
			alert("Моля въведете валидно съобщение!");
			return false;
		}
		
		alert("Съобщението е изпратено успешно! :)");
		
	}
	
};