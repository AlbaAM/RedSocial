Feature: Edicion de una publicacion en la BD
	
@Scenario1
Scenario Outline: Edicion correcta de publicacion
Given El usuario quiere editar una publicacion
When <nombre> Edicion correcta
Then Mensaje de exito en la edicion de la publicacion

	Examples:
	| nombre             |
	| "milhouse.milhouse"|
	
#nuevo test incluido en la fase de mantenimiento
@Scenario2
Scenario Outline: Edicion incorrecta de publicacion
	Given El usuario quiere editar una publicacion
	When <nombre> Edicion incorrecto
	Then Mensaje de error en la edicion de la publicacion
	
	Examples:
	| nombre             |
	| "milhouse.milhouse"|