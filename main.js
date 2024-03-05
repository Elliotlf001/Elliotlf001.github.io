console.log(window.innerWidth)






function senddata(){
	var form1_email = document.querySelector("input[id=email]");
	var form1_pwd = document.querySelector("input[id=pwd]");
	var form1_contact = document.querySelector("input[id=contact]");
	var username_i = form1_email.value;
	var password_i = form1_pwd.value;
	var contact_i = form1_contact.value;
	alert("Your personal data has been comprimised and you have been reported to the school " + username_i + ", " + contact_i + ".");
}

