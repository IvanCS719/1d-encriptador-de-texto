//Creando un objeto con las vocales y su incritación
const llavesVocales = {
    'e' : "enter",
    'i' : "imes",
    'a' : "ai",
    'o' : "ober",
    'u' : "ufat"
}

//Función para encriptar el texto del usuario
//Se recibe el texto como párametro
function encriptacion(texto) {
    //Variable para concatenar el texto resultante
    let resulText = '';
    
    //Se recorre el texto como un arreglo
    for (let i = 0; i < texto.length; i++) {
        //Se extrae cada caracter del texto
        const letra = texto[i];
        
        /**Si el caracter es alguna clave del objeto llavesVocales
         * se obtine su valor y se concatena al resulText, en caso contrario
         * se contena el mismo caracter del texto recorrido.
        */
        resulText += llavesVocales[letra] || letra;
        
    }

    //Se retorna el texto encriptado
    return resulText;
}