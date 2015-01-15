$(document).ready(function(){
	required = ["first_name", "last_name", "email", "comments"];
	email = $("#email");
	//errornotice = $("#errorMsg");
	// The text to show up within a field when it is incorrect
	emptyerror = "Моля, попълни това поле.";
	emailerror = "Моля, въведи валиден e-mail адрес.";

	$("#contactform").submit(function(){
		//Validate required fields
		for (i=0;i<required.length;i++) {
			var input = $('#'+required[i]);
			if ((input.val() == "") || (input.val() == emptyerror)) {
				input.addClass("error");
				input.val(emptyerror);
				//errornotice.fadeIn(750);
			} else {
				input.removeClass("error");
			}
		}
		// Validate the e-mail.
		if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
			email.addClass("error");
			email.val(emailerror);
		}

		//if any inputs on the page have the class 'error' the form will not submit
		if ($(":input").hasClass("error")) {
			return false;
		} else {
			//errornotice.hide();
			return true;
		}
	});
	
	// Clears any fields in the form when the user clicks on them
	$(":input").focus(function(){		
	   if ($(this).hasClass("error") ) {
			$(this).val("");
			$(this).removeClass("error");
	   }
	});
});	