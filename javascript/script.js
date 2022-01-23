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

    //Cambia de una lista a otra
    ddlLista.addEventListener('change', () => {

    });

});

/**
 * 
 */
function agregaElemento() {

}

/**
 * Vacia la lista (ul) para poder despues agregar elementos
 */
function vaciarLista() {

}

/**
 * Actualiza el select poniendo el nombre de todas los elementos en listaNombres
 */
function actualizaSelect() {

}

/**
 * Elimina una lista existente
 */
function eliminaLista() {

}

/**
 * Recoge el nombre de las listas y su contenido correspondiente y lo almacena en una cookie
 */
function guardaCookies() {

}

/**
 * Lee las cookies y carga las listas con sus nombres y contenidos determinados
 */
function leerCookies() {

}