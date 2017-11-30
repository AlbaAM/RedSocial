Feature: eliminar publicacion DB

@Scenario1
Scenario Outline: Eliminacion correcta de publicacion
	Given Usuario quiere eliminar una publiacion
	When <nombre> Eliminacion correcta
	Then Mensaje de exito en la eliminacion de publicacion

	Examples:
	| nombre             |
	| "milhouse.milhouse"|
	
#nuevo test incluido en la fase de mantenimiento
@Scenario2
Scenario Outline: Eliminacion incorrecta de publicacion
	Given Usuario quiere eliminar una publiacion
	When <nombre> Eliminacion incorrecta
	Then Mensaje de fallo en la eliminacion de publicacion
	
	Examples:
	| nombre             |
	| "milhouse.milhouse"|