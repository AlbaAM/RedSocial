Feature: Rechazar solicitudes de amistad de otro usuario


@Scenario1
Scenario Outline: Rechazar solicitud valido
	Given Usuario conectado para rechazar
	When <nombre> <pwd> <email> <respuesta> Rechazar solicitud de alguien que le ha mandado
	Then Rechazar peticion de amistad
	
	Examples:
	| nombre                 | pwd          | email                   | respuesta       |
	| "rechaza.rechaza"      | "1234qwer"   | "rechaza@alu.uclm.es"   | "rechaza"       |
	
@Scenario2
Scenario Outline: Rechazar solicitud invalido
	Given Usuario conectado para rechazar
	When <nombre> <pwd> <email> <respuesta> Rechazar solicitud de alguien que no le ha mandado
	Then Mensaje de error al rechazo de la peticion
	
	Examples:
	| nombre                 | pwd          | email                   | respuesta       |
	| "rechaza2.rechaza2"    | "1234qwer"   | "rechaza2@alu.uclm.es"  | "rechaza2"      |