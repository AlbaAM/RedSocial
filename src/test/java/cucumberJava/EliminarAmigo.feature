Feature: Eliminar de la lista de amigos a otro usuario


@Scenario1
Scenario Outline: Revocacion de amistad valido
	Given Usuario conectado para borrar a otro usuario
	When <nombre> <pwd> <email> <respuesta> Eliminar un usuario que es tu amigo
	Then Borrar amigo de ambos usuarios
	
	Examples:
	| nombre              | pwd          | email                 | respuesta       |
	| "borrado1.borrado1" | "1234qwer"   | "borrado1@alu.uclm.es"| "borrado1"      |
	
@Scenario2
Scenario Outline: Revocacion de amistad invalido
	Given Usuario conectado para borrar a otro usuario
	When <nombre> <pwd> <email> <respuesta> Eliminar un usuario que no es tu amigo
	Then Mensaje de error a la revocacion de usuario
	
	Examples:
	| nombre              | pwd          | email                 | respuesta       |
	| "borrado2.borrado2" | "1234qwer"   | "borrado2@alu.uclm.es"| "borrado2"      |