Feature: Compartir publicaciones

@Scenario1
Scenario Outline: Compartir correctamente una publicacion
	Given Usuario conectado quiere compartir una publicacion
	When <nombre> <pwd> <email> <respuesta> No esta compartida por el usuario
	Then Compartir publicacion
	
	Examples:
	| nombre                | pwd        | email                   | respuesta   |
	| "compartir.compartir" | "1234qwer" |  "compartir@alu.uclm.es"|  "compartir"|
	|"publicador.publicador"| "1234qwer" | "publicador@alu.uclm.es"|"publicador" |
	
@Scenario1
Scenario Outline: Compartir erroneamente una publicacion
	Given Usuario conectado quiere compartir una publicacion
	When <nombre> <pwd> <email> <respuesta> Esta compartida por el usuario
	Then No compartir publicacion
	
	Examples:
	| nombre                | pwd        | email                   | respuesta   |
	| "compartir.compartir" | "1234qwer" |  "compartir@alu.uclm.es"|  "compartir"|
	|"publicador.publicador"| "1234qwer" | "publicador@alu.uclm.es"|"publicador" |

@Scenario1
Scenario Outline: Dejar de compartir una publicacion
	Given Usuario conectado quiere dejar de compartir una publicacion
	When <nombre> <pwd> <email> <respuesta> Esta compartida por el usuario
	Then Dejar de compartir publicacion
	
	Examples:
	| nombre                | pwd        | email                   | respuesta   |
	| "compartir.compartir" | "1234qwer" |  "compartir@alu.uclm.es"|  "compartir"|
	|"publicador.publicador"| "1234qwer" | "publicador@alu.uclm.es"|"publicador" |
	
@Scenario1
Scenario Outline: Dejar de compartir una publicacion erroneamente
	Given Usuario conectado quiere dejar de compartir una publicacion
	When <nombre> <pwd> <email> <respuesta> No esta compartida por el usuario
	Then No dejar de compartir publicacion
	
	Examples:
	| nombre                | pwd        | email                   | respuesta   |
	| "compartir.compartir" | "1234qwer" |  "compartir@alu.uclm.es"|  "compartir"|
	|"publicador.publicador"| "1234qwer" | "publicador@alu.uclm.es"|"publicador" |