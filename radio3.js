window.onload = function() {
	
	const botonplay = document.querySelector(".botonplaypausa")
	const audio = document.querySelector("audio")
	const botonadelante = document.querySelector(".botonadelante")		
	const botonatras = document.querySelector(".botonatras")
	const cancionArtista = document.querySelector('.cancionArtista')
const cancionTitulo = document.querySelector('.cancionTitulo')

 let canciones = ["come-together-remastered-2015.mp3", "whatawonderful.mp3", "somewhere.mp3"]
 let cancionIndex = 0
 cancionArtistas = ['The Beatles', 'Louis Armstrong', "Israel Kamakawiwo ole"]
cancionTitulos = ["Come Together", "What a wonderful world", "Somewhere Over The Rainbow"]


 botonplay.onclick = function PlayPausa() {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }  
  }
  botonadelante.onclick = function Prox() {
    
    cancionIndex++
    if (cancionIndex > 3) {
        cancionIndex = 0
    }
    audio.src = canciones[cancionIndex]
    cancionArtista.innerHTML = cancionArtistas[cancionIndex]
    cancionTitulo.innerHTML = cancionTitulos[cancionIndex]

    audio.play()
  }

   botonatras.onclick = function Anterior() {
    
    cancionIndex--
    if (cancionIndex < 0) {
        cancionIndex = 3
    }
    audio.src = canciones[cancionIndex]
    cancionArtista.innerHTML = cancionArtistas[cancionIndex]
    cancionTitulo.innerHTML = cancionTitulos[cancionIndex]

    audio.play()
  }
}