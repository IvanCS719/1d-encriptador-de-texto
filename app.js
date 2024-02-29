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

//Función para encriptar el texto del usuario
//Se recibe el texto como párametro
function desencriptarTexto(texto) {

    //Variable donde se almacena la desencriptacion de cada vocal y el texto resultante
    let ResultText = texto;

    //Recorre cada vocal en el objeto
    for(let clave in llavesVocales){
        
        //Divide el texto en partes utilizando el valor de la clave actual como separador
        const TEXT_SEPARADO = ResultText.split(llavesVocales[clave]);
        //Une las partes del texto utilizando la clave actual como unión
        ResultText = TEXT_SEPARADO.join(clave);

    }

    //Se retorna el texto desencriptado
    return ResultText;
}
