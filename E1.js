function val(){
  if (document.getElementById('password').value !=
    document.getElementById('repassword').value) {
		alert("the passwords entered don't match");
  }
	if (document.getElementById('password').value.length < 8 || document.getElementById('repassword').value.length < 8){
		alert("the passwords are not at least 8 characters long");
	}
}
