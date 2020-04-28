function buscarEnLista (lista, item) {
	let loEncontre = false

	for (let i = 0; i < lista.length; i++) {
		if (lista[i] === item) {
			loEncontre = true
		}
	}
	return loEncontre
}
function buscarEnLista2 (lista2, item2) {
	let loEncontre = false

	for (let i = 0; i < lista2.length; i++) {
		if (lista2[i] === item2) {
			loEncontre = true
		}
	}
	return loEncontre
}function buscarEnLista3 (lista3, item3) {
	let loEncontre = false

	for (let i = 0; i < lista3.length; i++) {
		if (lista3[i] === item3) {
			loEncontre = true
		}
	}
	return loEncontre
}


document.addEventListener("DOMContentLoaded", function() {
		const boton=document.querySelector(".boton")
		const input=document.querySelector(".input")
		const lista=document.querySelector(".lista")
		const anterioresItems = []

	boton.addEventListener("click", function AgregarItem() {
		const value= input.value
	
			if (value === "") {
				input.classList.add ("invalidinput")
				input.classList.remove ("input")
			
			} else {
				input.classList.remove ("invalidinput")
				input.classList.add ("input")

		const item= input.value

			if (item !== '') {

		const loIngresoAntes = buscarEnLista(anterioresItems, item)

			if (!loIngresoAntes) {
				anterioresItems.push(item)
				
		const nuevoElemento = document.createElement("div")
		nuevoElemento.innerHTML = input.value

		lista.insertBefore(nuevoElemento, lista.firstChild)


		const button = document.createElement('button');
			button.innerText = "Borrar " + input.value
			document.body.appendChild(button)

			button.addEventListener("click", function(){
			
			anterioresItems.splice(anterioresItems.indexOf(item), 1)
			
			nuevoElemento.innerHTML = ''
			button.remove("button")
			button.classList.add("button")
		})
			button.style.width = "85px";
			button.style.margin = "10px";
			button.style.backgroundColor = "#C00D0D";
			button.style.borderColor = "#C00D0D";
   			button.style.fontFamily = "monospace";
    		button.style.fontSize = "large";
}}	

		input.onkeydown = function(event) {
		if (event.key === "Enter") {
			AgregarItem()
		}
	}	


}})})
	
	

document.addEventListener("DOMContentLoaded", function() {
		const boton2=document.querySelector(".boton2")
		const input2=document.querySelector(".input2")
		const lista2=document.querySelector(".lista2")
		const anterioresItems2= []


	boton2.addEventListener("click", function AgregarItem2() {
		const value= input2.value
		const item2= input2.value

			if (value === "") {
				input2.classList.add ("invalidinput")
				input2.classList.remove ("input2")
			} else {
				input2.classList.remove ("invalidinput")
				input2.classList.add ("input2")
			
		const item2= input2.value

			if (item2 !== '') {

		const loIngresoAntes2 = buscarEnLista2(anterioresItems2, item2)

			if (!loIngresoAntes2) {
				anterioresItems2.push(item2)

		const nuevoElemento2 = document.createElement("div")
		nuevoElemento2.innerHTML = input2.value

		lista2.insertBefore(nuevoElemento2, lista2.firstChild)


		const button = document.createElement('button');
			button.innerText = "Borrar " + input2.value
			document.body.appendChild(button)

			button.addEventListener("click", function(){
			
			anterioresItems2.splice(anterioresItems2.indexOf(item2), 1)
			nuevoElemento2.innerHTML = ''
			button.remove("button")
		})

			button.style.width = "85px";
			button.style.margin = "10px";
			button.style.backgroundColor = "#C00D0D";
			button.style.borderColor = "#C00D0D";
   			button.style.fontFamily = "monospace";
    		button.style.fontSize = "large";

}}	

		input2.onkeydown = function(event) {
		if (event.key === "Enter") {
			AgregarItem2()
		}
	}	

}})})

document.addEventListener("DOMContentLoaded", function() {
		const input3=document.querySelector(".input3")
		const boton3=document.querySelector(".boton3")
		const lista3=document.querySelector(".lista3")
		const anterioresItems3 = []
		const button = document.querySelector(".button")


	boton3.addEventListener("click", function AgregarItem3() {
		const value= input3.value
		const item3= input3.value

			if (value === "") {
				input3.classList.add ("invalidinput")
				input3.classList.remove ("input3")
			} else {
				input3.classList.remove ("invalidinput")
				input3.classList.add ("input3")
		
		const item3= input3.value

			if (item3 !== '') {

		const loIngresoAntes3 = buscarEnLista2(anterioresItems3, item3)

			if (!loIngresoAntes3) {
				anterioresItems3.push(item3)

		const nuevoElemento3 = document.createElement("div")
			nuevoElemento3.innerHTML = input3.value

			lista3.insertBefore(nuevoElemento3, lista3.firstChild)

		const button = document.createElement('button');
			
			anterioresItems3.splice(anterioresItems3.indexOf(item3), 1)
			button.innerHTML = "Borrar " + input3.value	
			document.body.appendChild(button)

			button.addEventListener("click", function(){
			
			nuevoElemento3.innerHTML = ''
			button.remove("button")
		})
			button.style.width = "85px";
			button.style.margin = "10px";
			button.style.backgroundColor = "#C00D0D";
			button.style.borderColor = "#C00D0D";
   			button.style.fontFamily = "monospace";
    		button.style.fontSize = "large";
}}

		input3.onkeydown = function(event) {
		if (event.key === "Enter") {
			AgregarItem3()
		}
	}	
}})})
	
	