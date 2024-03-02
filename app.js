//Conectando mediante DOM los elementos html con javascript
//Elemento para escribir el texto
const INPUT_TEXTO = document.getElementById('idInputTexto');
//Elemento para mostrar el resultado de la encriptación o desencriptación
const TEXTO_RESULTADO = document.getElementById('TextoResultado');

const BTN_COPIAR = document.getElementById('btnCopiar');

//Validar que el texto introducido no tenga mayúsculas y tíldes
//Pero se aceptan otros caracteres especiales
const REGEXP_VALIDADOR = /^[a-z ¡!@#$%^&*()_+{}\[\]:;<>,.¿?'"~\\\/\-]*$/;

//Creando un objeto con las vocales y su incritación
const llavesVocales = {
    'e': "enter",
    'i': "imes",
    'a': "ai",
    'o': "ober",
    'u': "ufat"
}

//Función para encriptar el texto del usuario
//Se recibe el texto como párametro
function encriptarTexto(texto) {
    //Variable para concatenar el texto resultante
    let ResultText = '';

    //Se recorre el texto como un arreglo
    for (let i = 0; i < texto.length; i++) {
        //Se extrae cada caracter del texto
        const letra = texto[i];

        /**Si el caracter es alguna clave del objeto llavesVocales
         * se obtine su valor y se concatena al resulText, en caso contrario
         * se contena el mismo caracter del texto recorrido.
        */
        ResultText += llavesVocales[letra] || letra;

    }

    //Se retorna el texto encriptado
    return ResultText;
}

//Función para desencriptar el texto del usuario
//Se recibe el texto como párametro
function desencriptarTexto(texto) {

    //Variable donde se almacena la desencriptacion de cada vocal y el texto resultante
    let ResultText = texto;

    //Recorre cada vocal en el objeto
    for (let clave in llavesVocales) {

        //Divide el texto en partes utilizando el valor de la clave (vocal) actual como separador
        const TEXT_SEPARADO = ResultText.split(llavesVocales[clave]);
        //Une las partes del texto utilizando la clave (vocal) actual como unión
        ResultText = TEXT_SEPARADO.join(clave);

    }

    //Se retorna el texto desencriptado
    return ResultText;
}

//Funcion para procesar la encriptación
function procesarEncriptacion() {
    //Validar que el campo del texto no este vacio
    if(INPUT_TEXTO.value == ""){
        alert("El campo no puede estar vacío.");
        return;
    }

    //Se valida el texto ingresado
    if (REGEXP_VALIDADOR.test(INPUT_TEXTO.value)) {
        /*Si es verdadero se llama a la función para ecriptar el texto
          y se inserta el rultado en el elemento html*/
        TEXTO_RESULTADO.innerText = encriptarTexto(INPUT_TEXTO.value);
        cambiarTextoBtnCopiar("Copiar Texto");

    } else {
        //Si es falso, se muestra un alert informativo
        alert("Solo se aceptan letras minúsculas y sin acentos.");

    }
}

//Funcion para procesar la desencriptación
function procesarDesencriptacion() {
    //Validar que el campo del texto no este vacio
    if(INPUT_TEXTO.value == ""){
        alert("El campo no puede estar vacío.");
        return;
    }
    //Se valida el texto ingresado
    if (REGEXP_VALIDADOR.test(INPUT_TEXTO.value)) {
        /*Si es verdadero se llama a la función para ecriptar el texto
          y se inserta el rultado en el elemento html*/
        TEXTO_RESULTADO.innerText = desencriptarTexto(INPUT_TEXTO.value);
        cambiarTextoBtnCopiar("Copiar Texto");

    } else {
        //Si es falso, se muestra un alert informativo
        alert("Solo se aceptan letras minúsculas y sin acentos.");

    }
}

//Función para copiar el texto resultante
function copiarResultado() {
    //Se verifica si el navegador soporta el API navigator.clipboard.writeText()
    if (navigator.clipboard) {

        //Se solicita permiso al usuario para acceder al portapapeles
        navigator.permissions.query({ name: 'clipboard-write' }).then(permissionStatus => {

            if (permissionStatus.state === 'granted') {
                // El usuario ha concedido permiso para utilizar navigator.clipboard.writeText()
                try {
                    //Copiar el texto resultante al clipboard
                    navigator.clipboard.writeText(TEXTO_RESULTADO.textContent);
                    cambiarTextoBtnCopiar("¡Texto Copiado!");
                } catch (error) {
                    alert("Ha ocurrido un error al copiar el texto");
                }
                
            } else if (permissionStatus.state === 'prompt') {
                // El usuario aún no ha concedido el permiso para utilizar navigator.clipboard.writeText()
                alert('Para copiar el texto al portapapeles, necesitamos tu autorización. Por favor, haz clic en "Aceptar" para permitirlo.');
            } else {
                // El usuario ha denegado el permiso para utilizar navigator.clipboard.writeText()
                alert('No se ha concedido permiso para acceder al portapapeles. Para copiar el texto, por favor revisa la configuración de tu navegador.');
            }

        });

    } else {
        alert('Su navegador no soporta la API navigator.clipboard.writeText()');
    }
}

//Función para cambiar el texto del botón copiar
function cambiarTextoBtnCopiar(texto) {
    BTN_COPIAR.innerText = texto;
}