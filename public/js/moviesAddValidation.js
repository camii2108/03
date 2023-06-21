window.onload = function() {
    let titulo = document.querySelector('.moviesAddTitulo');
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
  
    const erroresElement = document.querySelector('.errores');
    erroresElement.classList.add('alert-warning');
  
    const form = document.querySelector('.form');
    form.addEventListener('submit', validarFormulario);
  
    function validarFormulario(event) {
      event.preventDefault();
  
      // Eliminar mensajes de error anteriores
      while (erroresElement.firstChild) {
        erroresElement.removeChild(erroresElement.firstChild);
      }
  
      // Validaciones
      const tituloInput = document.getElementById('title');
      const ratingInput = document.getElementById('rating');
      const awardsInput = document.getElementById('awards');
      const duracionInput = document.getElementById('length');
  
      let errores = [];
  
      if (tituloInput.value.trim() === '') {
        errores.push('El título de la película es obligatorio.');
      }
  
      const rating = parseFloat(ratingInput.value);
      if (isNaN(rating) || rating < 0 || rating > 10) {
        errores.push('La calificación debe estar entre 0 y 10.');
      }
  
      const awards = parseInt(awardsInput.value);
      if (isNaN(awards) || awards < 0 || awards > 10) {
        errores.push('La cantidad de premios debe estar entre 0 y 10.');
      }
  
      const duracion = parseInt(duracionInput.value);
      if (isNaN(duracion) || duracion < 60 || duracion > 360) {
        errores.push('La duración debe estar entre 60 y 360 minutos.');
      }
  
      // Mostrar mensajes de error o éxito
      if (errores.length > 0) {
        errores.forEach((error) => {
          const errorElement = document.createElement('li');
          errorElement.innerText = error;
          erroresElement.appendChild(errorElement);
        });
      } else {
        const exito = document.createElement('li');
        exito.innerText = 'La película se guardó satisfactoriamente.';
        exito.classList.add('exito');
        erroresElement.appendChild(exito);
      }
    }
  };
  