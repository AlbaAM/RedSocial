Feature: Creacion de un nuevo usuario

@Scenario1
Scenario Outline: Creacion correcta de cuenta
	Given Usuario en pagina de creacion
	When <nombre> <email> <pwd1> <pwd2> <respuesta> validos
	Then Mensaje de validacion y usuario insertado
	
	Examples:
	| nombre           | email                  | pwd1           | pwd2           | respuesta |
	| "fernando.cozar" | "fernando@alu.uclm.es" |  "1234Fernando"|  "1234Fernando"|"fer"      |
	
	

@Scenario2
Scenario Outline: Creacion incorrecta de cuenta por email invalido
	Given Usuario en pagina de creacion
	When <nombre> <email> <pwd1> <pwd2> Email no tiene extension alu.uclm.es
	Then Mensaje de error a la creacion email invaildo
	
	Examples:
	| nombre           | email                  | pwd1           | pwd2           |
	| "fernando.cozar" | "fernando@alu.uclm.ese"|  "1234Fernando"|  "1234Fernando"|
	
@Scenario3
Scenario Outline: Creacion incorrecta de cuenta por password que no coinciden
	Given Usuario en pagina de creacion
	When <nombre> <email> <pwd1> <pwd2> Password y su confirmacion no coinciden
	Then Mensaje de error a la creacion password no coinciden
	
	Examples:
	| nombre           | email                  | pwd1           | pwd2           |
	| "fernando.cozar" | "fernando@alu.uclm.es" |  "1234"        |  "12345"       |
	
@Scenario4
Scenario Outline: Creacion incorrecta de cuenta por nombre invalido
	Given Usuario en pagina de creacion
	When <nombre> <email> <pwd1> <pwd2> Nombre no tiene el formato adecuado
	Then Mensaje de error a la creacion nombre invalido
	
	Examples:
	| nombre           | email                  | pwd1           | pwd2           |
	| "fernandocozar" | "fernando@alu.uclm.es" |  "1234Fernando"|  "1234Fernando"|

@Scenario5
Scenario Outline: Creacion incorrecta de cuenta por password poco segura
	Given Usuario en pagina de creacion
	When <nombre> <email> <pwd1> <pwd2> Password no tiene la seguridad adecuada
	Then Mensaje de error a la creacion password poco segura
	
	Examples:
	| nombre           | email                  | pwd1           | pwd2           |
	| "fernando.cozar" | "fernando@alu.uclm.es" |  "1234"        |  "1234"        |
	
@Scenario6
Scenario Outline: Creacion incorrecta de cuenta cuenta  ya existente
	Given Usuario en pagina de creacion
	When <nombre> <email> <pwd1> <pwd2> Nombre que intenta registrar ya existe
	Then Mensaje de error a la creacion cuenta ya existente
	
	Examples:
	| nombre              | email                  | pwd1           | pwd2           |
	| "milhouse.milhouse" | "milhouse@alu.uclm.es" |  "1234milhouse"|  "1234milhouse"|