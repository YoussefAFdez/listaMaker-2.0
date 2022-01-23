//Variables de acceso global
let listaNombres = [];   //Contiene el nombre de las listas
var listas = [];         //Contiene el contenido de las listas
let seleccionado = -1;   //Determina la lista seleccionada

window.addEventListener('DOMContentLoaded', () => {
    //Cancelamos el submit del formulario al pulsar enter
    document.getElementById('form').addEventListener('submit', (e) => e.preventDefault());
   
    //Declaracion de variables locales
    let ddlLista = document.getElementById('ddlLista');             //Select
    let nodoTbEntrada = document.getElementById('tbEntrada');       //TextBox
    let lista = document.getElementById('lista');                   //Ul
    let tituloLista = document.getElementById('tituloLista');       //H2
    let btnAgregar = document.getElementById('btnAgregar');         //Button
    let btnNueva = document.getElementById('btnNueva');             //Button
    let btnEliminar = document.getElementById('btnEliminar');       //Button
    let btnGuardar = document.getElementById('btnGuardar');         //Button

    //Leemos las cookies al comenzar el programa (Descomentar la linea cuando se cree la funcion)
    //leerCookies();

    //Ocurre cuando se pulsa una tecla dentro del textbox
    nodoTbEntrada.addEventListener('keypress', () => {

    });
    
    //Agrega un elemento a la lista
    btnAgregar.addEventListener('click', () => {

    });

    //Crea una nueva lista
    btnNueva.addEventListener('click', () => {

    });

    //Elimina la lista actual
    btnEliminar.addEventListener('click', () => {

    });

    //Guarda las listas en cookies
    btnGuardar.addEventListener('click', () => {

    });

    //Cambia de una lista a otra (Modifica la variable seleccionado)
    ddlLista.addEventListener('change', () => {

    });

});

/**
 * Agrega el contenido del textbox a la lista (ul)
 * Encargada: Jaime
 */
function agregaElementoVista() {

}

/**
 * Agrega el contenido del textbox a listas[]
 * Encargado: Sheila
 */
function agregaElementoModelo() {
    
}

/**
 * Vacia la lista (ul) para poder despues agregar elementos
 * Encargada: Jaime
 * Extra: Elimina todos los li de la lista
 */
function vaciarLista() {

}

/**
 * Actualiza el select poniendo el nombre de todas los elementos en listaNombres
 * Encargada: Jaime
 * Extra: Asignar un value de 0 a n a cada uno de los elementos generados
 */
function actualizaSelect() {

}

/**
 * Elimina una lista existente tanto de listaNombres como de Listas
 * Encargado: Sheila
 * Extra: Debe llamar a actualizaSelect() al terminar
 */
function eliminaLista() {

}

/**
 * Recoge el nombre de las listas y su contenido correspondiente y lo almacena en una cookie
 * Encargado: David
 */
function guardaCookies() {

}

/**
 * Lee las cookies y carga las listas con sus nombres y contenidos determinados
 * Encargado: David
 */
function leerCookies() {

}