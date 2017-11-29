Feature: Logeo al sistema


@Scenario1
Scenario Outline: Login exitoso con credenciales validas
	Given Usuario en pagina de login
	When <nombre> y <pwd> correctas
	Then Mensaje de bienvenida al login
	
	Examples:
	| nombre                  | pwd              |
	| "milhouse.milhouse"     | "1234milhouse"   |

@Scenario2
Scenario Outline: Login fallido por nombre invalido
	Given Usuario en pagina de login
	When <nombre> incorrecto y <pwd> correcta
	Then Mensaje de error al login
	
	Examples:
	| nombre         | pwd      |
	| "noexiste"     | "1234"   |
	
@Scenario3
Scenario Outline: Login fallido por passoword invalido
	Given Usuario en pagina de login
	When <pwd> incorrecta y <nombre> correcto
	Then Mensaje de error al login
	
	Examples:
	| nombre                  | pwd      |
	| "milhouse.milhouse"     | "12345"   |



