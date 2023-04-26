function validarPassword() {
	const pass1 = document.getElementById("password").value;
	const pass2 = document.getElementById("confirm_password").value;

	return (pass1 == pass2);
}
function submitClick(){
	if (validarPassword()) {
		alert("Registro completado correctamente")
		return true;
	}
	alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
	return false;
}
