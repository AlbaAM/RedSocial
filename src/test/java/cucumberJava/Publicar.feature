Feature: Publicacion 


@Scenario1
Scenario Outline: Publicacion exitosa
	Given Usuario en pagina principal
	When <nombre> Publicacion correcta
	Then Mensaje de exito a la publicacion
	
	Examples:
	| nombre             |
	| "milhouse.milhouse"|

# nuevo test incluido en la fase de mantenimiento
@Scenario2
Scenario Outline: Publicacion fallida
	Given Usuario en pagina principal
	When <nombre> Publicacion incorrecta
	Then Mensaje de fallo a la publicacion
	
	Examples:
	| nombre             |
	| "milhouse.milhouse"|