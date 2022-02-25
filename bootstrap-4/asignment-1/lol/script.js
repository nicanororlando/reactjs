let nombre = prompt("Ingrese su nombre de invocador y luego elija el campeon");

let udyr = document.getElementById("udyr");
let shaco = document.getElementById("shaco");
let victoria = document.querySelector(".victoria");
let derrota = document.querySelector(".derrota");

//Victoria
shaco.addEventListener("click", (e)=>{
	if(nombre == "Zurdo Peronista" || nombre == "zurdo peronista"){
		if (derrota.classList.contains("animacion")) derrota.classList.remove("animacion");
		victoria.removeAttribute("hidden");
		victoria.classList.add("animacion");
	}
	else{
		if (victoria.classList.contains("animacion")) victoria.classList.remove("animacion");
		victoria.setAttribute("hidden","true");
		derrota.classList.add("animacion");
	}
});

//Derrota
udyr.addEventListener("click", (e)=>{
	if (victoria.classList.contains("animacion")) victoria.classList.remove("animacion");
	victoria.setAttribute("hidden","true");
	derrota.classList.add("animacion");
});