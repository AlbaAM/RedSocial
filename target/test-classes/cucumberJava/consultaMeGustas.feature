Feature: Consultar Me gusta

@Scenario1
Scenario Outline: Usuario quiere saber quien le ha dado a me gusta
	Given Usuario conectado consulta usuarios que han dado me gusta
	When <nombre> Activacion correcta la consulta
	Then Se muestra correctamente lo usuarios que han dado me gusta
	
	Examples:
	| nombre              |
	| "milhouse.milhouse" |
	| "miguel.miguel"     |
	| "daniel.gomez"      |
