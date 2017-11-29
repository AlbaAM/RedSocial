Feature: Enviar solicitudes de amistad a otro usuario


@Scenario1
Scenario Outline: Envio de solicitud de amistad valido
	Given Usuario conectado para enviar solicitud
	When <nombre> <pwd> <email> <respuesta> Selecciona otro usuario sin ser amigos ni tener solicitudes entre ellos
	Then Envio solicitud al segundo
	
	Examples:
	| nombre                 | pwd          | email                   | respuesta       |
	| "solicitado.solicitado"| "1234qwer"   | "solicitado@alu.uclm.es"| "solicitado"    |
	
@Scenario2
Scenario Outline: Solicitud invalida porque son amigos
	Given Usuario conectado para enviar solicitud
	When <nombre> <pwd> <email> <respuesta> Selecciona a otro usuario siendo su amigo
	Then No envio de solicitud
	
	Examples:
	| nombre                   | pwd          | email                    | respuesta        |
	| "solicitado2.solicitado2"| "1234qwer"   | "solicitado2@alu.uclm.es"| "solicitado2"    |
	
@Scenario3
Scenario Outline: Solicitud invalida porque tienen solicitudes pendientes
	Given Usuario conectado para enviar solicitud
	When <nombre> <pwd> <email> <respuesta> Selecciona a otro usuario teniendo solicitudes pendientes entre ellos
	Then Solicitud ya enviada
	
	Examples:
	| nombre                   | pwd          | email                    | respuesta        |
	| "solicitado3.solicitado3"| "1234qwer"   | "solicitado3@alu.uclm.es"| "solicitado3"    |