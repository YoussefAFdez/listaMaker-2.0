# listaMaker-2.0
Lista Maker realizado con compañeros

Variables

listaNombres[] : Almacena el nombre de todas las listas

	- ej:	listaNombres["Mercadona", "Dia"]


listas[] : Almacena el valor o contenido de dichas listas

	- ej:	listas[0]["tomates", "lechuga", "patatas"]
		listas[1]["pimientos", "agua"]


seleccionado : Determina la lista seleccionada en el momento para poder acceder a sus datos

	- ej:	Tomando como referencia la lista anterior si seleccionado vale 0 cuando accedamos a las listas accedemos a:
		- listaNombres[0] =	"Mercadona"
		- listas[0] = 		["tomates", "lechuga", "patatas"]

	Digamos que guarda el indice y nos permite conectar las 2 listas diferentes



Cookies

Las cookies se almacenaran de la siguiente manera:

listas="MERCADONA[1]tomate[2]pimiento[2]lechuga[3]DIA[1]huevos[2]patatas"

Donde [1] es un separador, [2] es un separador distinto y [3] es otro separador distinto

	[1] Separa el nombre de una lista del contenido de esta
	[2] Separa cada uno de los elementos contenido de una lista
	[3] Separa listas

A la hora de leer las cookies se debera dividir acorde.

* Se ha escrito el nombre de la lista en mayusculas para hacer incapie en donde empieza y termina cada una



Elementos

Ya se han recogido todos los elementos del documento html, hacer uso de los mismos con los nombres ya asignados.



Eventos

Se han de gestionar los siguientes eventos segun el elemento que lo generen y llamar a las funciones indicadas

	0.- DOMContentLoaded ->			leerCookies()
		*Se carga cuando cargue la pagina

	1.- nodoTbEntrada ->	keypress -> 	agregaElemento()
		*Se debe controlar que solo se actue cuando se pulse la tecla enter

	2.- btnAgregar -> 	click -> 	agregaElemento()
		*Realiza la misma funcion que el anterior, pero pulsando un boton

	3.- btnNueva -> 	click -> 	vaciarLista()
				      ->	actualizaSelect()

	4.- btnEliminar ->	click ->	eliminaLista()

	5.- btnGuardar -> 	click -> 	guardarCookies()

	6.- ddlLista ->		change ->



Funciones

Las funciones se pueden encontrar en el fichero script.js y ya incluyen una descripcion de lo que hacen
