Feature: Eliminar cuenta BD

@Scenario1
Scenario Outline: Eliminacion correcta de la cuenta de un usuario
	Given Usuario conectado quiere borrar su cuenta
	When <nombre> <pwd> <email> <respuesta> correctos
	Then Borrar cuenta y cambiar publicaciones de propietario
	
	Examples:
	| nombre              | pwd          | email                 | respuesta       |
	| "borrar.borrar"     | "1234qwer"   | "borrar@alu.uclm.es"  | "borrar"        |

#nuevo test incluido en la fase de mantenimiento
@Scenario2
Scenario Outline: Eliminacion incorrecta de la cuenta de un usuario
	Given Usuario conectado quiere borrar su cuenta
	When <nombre> <pwd> <email> <respuesta> incorrectos
	Then No se borra cuenta
	
	Examples:
	| nombre              | pwd          | email                 | respuesta       |
	| "borrar.borrar"     | "1234qwer"   | "borrar@alu.uclm.es"  | "borrar"        |