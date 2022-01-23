//Variables de acceso global
let listaNombres = [];   //Contiene el nombre de las listas
var listas = [];         //Contiene el contenido de las listas
let seleccionado = -1;   //Determina la lista seleccionada

window.addEventListener('DOMContentLoaded', () => {
    //Cancelamos el submit del formulario al pulsar enter
    document.getElementById('form').addEventListener('submit', (e) => e.preventDefault());
   
    //Declaracion de variables locales
    let ddlLista = document.getElementById('ddlLista');
    let nodoTbEntrada = document.getElementById('tbEntrada');
    let lista = document.getElementById('lista');
    let tituloLista = document.getElementById('tituloLista');
    let btnAgregar = document.getElementById('btnAgregar');
    let btnNueva = document.getElementById('btnNueva');
    let btnEliminar = document.getElementById('btnEliminar');
    let btnGuardar = document.getElementById('btnGuardar');

    //Ocurre cuando se pulsa una tecla dentro del textbox
    nodoTbEntrada.addEventListener("keypress", () => {

    });


});