const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')



open.addEventListener('click', () => {
	container.classList.add('show-nav');
	/*acceder a la lista de clases de un elemento 
	como una cadena de texto delimitada por 
	espacios a través de element.className. */
	/*se le agrega la clase show-nav al elemento
	seleccionado el show-nave contiene la rotación 
	del boton y el contenent */
});

close.addEventListener('click', () => {
	container.classList.remove('show-nav');
	/*al recibir otro click se remueve la clse regresando 
	a su estado original */
});