// Bloque 1 
// Bloque 2
// Bloque 3
// Bloque 4 Hannia
const formulario = document.getElementById("contactoForm");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", (event) =>  {
    event.preventDefault();
    console.log("El formulario fue enviado con exito");

    //Obtener los datos del formulario
const nombre = document.getElementById("nombreInput").value;
const correo = document.getElementById("contactoInput").value;
const modelo = document.getElementById("modelo").value;
const mensaje = document.getElementById("mensaje").value;
const regexnombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    //Validaciones
if(nombre.trim().length <3 || !regexnombre.test(nombre.trim())) {
    respuesta.innerHTML = `
    <div class="alert alert-danger">
        Ingresa un nombre valido. 
    </div>
`;
return
} 

if(mensaje.trim().length < 10) {
    respuesta.innerHTML = `
    <div class="alert alert-danger">
        Ingresa un mensaje valido. 
    </div>
`;
return      
}
    //Mensaje enviado el formulario si todo ok
respuesta.innerHTML = `
    <div class="alert alert-success">
        ¡Gracias ${nombre}! Tu mensaje fue enviado correctamente, nos pondremos en contacto pronto. 
    </div>
`;
    //limpiar el formulario
formulario.reset();
})

// Bloque 5