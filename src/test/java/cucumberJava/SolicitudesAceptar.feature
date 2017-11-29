Feature: Aceptar solicitudes de amistad de otro usuario


@Scenario1
Scenario Outline: Aceptar solicitud valido
	Given Usuario conectado para aceptar
	When <nombre> <pwd> <email> <respuesta> Acepta solicitud de alguien que le ha mandado
	Then Aceptar como amigo
	
	Examples:
	| nombre              | pwd          | email                 | respuesta       |
	| "acepta.acepta"     | "1234qwer"   | "acepta@alu.uclm.es"  | "acepta"        |
	
@Scenario2
Scenario Outline: Aceptar solicitud invalido
	Given Usuario conectado para aceptar
	When <nombre> <pwd> <email> <respuesta> Acepta solicitud de alguien que no le ha mandado
	Then Mensaje de error a la aceptacion
	
	Examples:
	| nombre              | pwd          | email                 | respuesta       |
	| "acepta2.acepta2"   | "1234qwer"   | "acepta2@alu.uclm.es" | "acepta2"       |
	