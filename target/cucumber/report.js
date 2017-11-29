$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\BorrarCuenta.feature');
formatter.feature({
  "line": 1,
  "name": "Eliminar cuenta BD",
  "description": "",
  "id": "eliminar-cuenta-bd",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Eliminacion correcta de la cuenta de un usuario",
  "description": "",
  "id": "eliminar-cuenta-bd;eliminacion-correcta-de-la-cuenta-de-un-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario conectado quiere borrar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"borrar.borrar\" \"1234qwer\" \"borrar@alu.uclm.es\" \"borrar\" correctos",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Borrar cuenta y cambiar publicaciones de propietario",
  "keyword": "Then "
});
formatter.match({
  "location": "borrarCuentaTest.Usuario_conectado_quiere_borrar_su_cuenta()"
});
formatter.result({
  "duration": 9085681583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "borrar.borrar",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 17
    },
    {
      "val": "borrar@alu.uclm.es",
      "offset": 28
    },
    {
      "val": "borrar",
      "offset": 49
    }
  ],
  "location": "borrarCuentaTest.correctos(String,String,String,String)"
});
formatter.result({
  "duration": 4098109,
  "status": "passed"
});
formatter.match({
  "location": "borrarCuentaTest.Borrar_cuenta_y_cambiar_publicaciones_de_propietario()"
});
formatter.result({
  "duration": 5203759457,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Eliminacion incorrecta de la cuenta de un usuario",
  "description": "",
  "id": "eliminar-cuenta-bd;eliminacion-incorrecta-de-la-cuenta-de-un-usuario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado quiere borrar su cuenta",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"borrar.borrar\" \"1234qwer\" \"borrar@alu.uclm.es\" \"borrar\" incorrectos",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "No se borra cuenta",
  "keyword": "Then "
});
formatter.match({
  "location": "borrarCuentaTest.Usuario_conectado_quiere_borrar_su_cuenta()"
});
formatter.result({
  "duration": 407406076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "borrar.borrar",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 17
    },
    {
      "val": "borrar@alu.uclm.es",
      "offset": 28
    },
    {
      "val": "borrar",
      "offset": 49
    }
  ],
  "location": "borrarCuentaTest.incorrectos(String,String,String,String)"
});
formatter.result({
  "duration": 69465,
  "status": "passed"
});
formatter.match({
  "location": "borrarCuentaTest.No_se_borra_cuenta()"
});
formatter.result({
  "duration": 15868,
  "status": "passed"
});
formatter.uri('cucumberJava\CompartirPublicacion.feature');
formatter.feature({
  "line": 1,
  "name": "Compartir publicaciones",
  "description": "",
  "id": "compartir-publicaciones",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Compartir correctamente una publicacion",
  "description": "",
  "id": "compartir-publicaciones;compartir-correctamente-una-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario conectado quiere compartir una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"compartir.compartir\" \"1234qwer\" \"compartir@alu.uclm.es\" \"compartir\" No esta compartida por el usuario",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Compartir publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "compartirPublicacionesTest.Usuario_conectado_quiere_compartir_una_publicacion()"
});
formatter.result({
  "duration": 812956330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compartir.compartir",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 23
    },
    {
      "val": "compartir@alu.uclm.es",
      "offset": 34
    },
    {
      "val": "compartir",
      "offset": 58
    }
  ],
  "location": "compartirPublicacionesTest.No_esta_compartida_por_el_usuario(String,String,String,String)"
});
formatter.result({
  "duration": 300050213,
  "status": "passed"
});
formatter.match({
  "location": "compartirPublicacionesTest.Compartir_publicacion()"
});
formatter.result({
  "duration": 11468091732,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Compartir correctamente una publicacion",
  "description": "",
  "id": "compartir-publicaciones;compartir-correctamente-una-publicacion;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario conectado quiere compartir una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"publicador.publicador\" \"1234qwer\" \"publicador@alu.uclm.es\" \"publicador\" No esta compartida por el usuario",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Compartir publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "compartirPublicacionesTest.Usuario_conectado_quiere_compartir_una_publicacion()"
});
formatter.result({
  "duration": 911793330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "publicador.publicador",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 25
    },
    {
      "val": "publicador@alu.uclm.es",
      "offset": 36
    },
    {
      "val": "publicador",
      "offset": 61
    }
  ],
  "location": "compartirPublicacionesTest.No_esta_compartida_por_el_usuario(String,String,String,String)"
});
formatter.result({
  "duration": 302336931,
  "status": "passed"
});
formatter.match({
  "location": "compartirPublicacionesTest.Compartir_publicacion()"
});
formatter.result({
  "duration": 11770929730,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Compartir erroneamente una publicacion",
  "description": "",
  "id": "compartir-publicaciones;compartir-erroneamente-una-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado quiere compartir una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"compartir.compartir\" \"1234qwer\" \"compartir@alu.uclm.es\" \"compartir\" Esta compartida por el usuario",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "No compartir publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "compartirPublicacionesTest.Usuario_conectado_quiere_compartir_una_publicacion()"
});
formatter.result({
  "duration": 812673532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compartir.compartir",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 23
    },
    {
      "val": "compartir@alu.uclm.es",
      "offset": 34
    },
    {
      "val": "compartir",
      "offset": 58
    }
  ],
  "location": "compartirPublicacionesTest.Esta_compartida_por_el_usuario(String,String,String,String)"
});
formatter.result({
  "duration": 813132991,
  "status": "passed"
});
formatter.match({
  "location": "compartirPublicacionesTest.No_compartir_publicacion()"
});
formatter.result({
  "duration": 11369502973,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Compartir erroneamente una publicacion",
  "description": "",
  "id": "compartir-publicaciones;compartir-erroneamente-una-publicacion;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado quiere compartir una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"publicador.publicador\" \"1234qwer\" \"publicador@alu.uclm.es\" \"publicador\" Esta compartida por el usuario",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "No compartir publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "compartirPublicacionesTest.Usuario_conectado_quiere_compartir_una_publicacion()"
});
formatter.result({
  "duration": 805568309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "publicador.publicador",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 25
    },
    {
      "val": "publicador@alu.uclm.es",
      "offset": 36
    },
    {
      "val": "publicador",
      "offset": 61
    }
  ],
  "location": "compartirPublicacionesTest.Esta_compartida_por_el_usuario(String,String,String,String)"
});
formatter.result({
  "duration": 712917966,
  "status": "passed"
});
formatter.match({
  "location": "compartirPublicacionesTest.No_compartir_publicacion()"
});
formatter.result({
  "duration": 11567093403,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Dejar de compartir una publicacion",
  "description": "",
  "id": "compartir-publicaciones;dejar-de-compartir-una-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Usuario conectado quiere dejar de compartir una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "\"compartir.compartir\" \"1234qwer\" \"compartir@alu.uclm.es\" \"compartir\" Esta compartida por el usuario",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Dejar de compartir publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "compartirPublicacionesTest.Usuario_conectado_quiere_dejar_de_compartir_una_publicacion()"
});
formatter.result({
  "duration": 812609355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compartir.compartir",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 23
    },
    {
      "val": "compartir@alu.uclm.es",
      "offset": 34
    },
    {
      "val": "compartir",
      "offset": 58
    }
  ],
  "location": "compartirPublicacionesTest.Esta_compartida_por_el_usuario(String,String,String,String)"
});
formatter.result({
  "duration": 1018563497,
  "status": "passed"
});
formatter.match({
  "location": "compartirPublicacionesTest.Dejar_de_compartir_publicacion()"
});
formatter.result({
  "duration": 13311587120,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Dejar de compartir una publicacion",
  "description": "",
  "id": "compartir-publicaciones;dejar-de-compartir-una-publicacion;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Usuario conectado quiere dejar de compartir una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "\"publicador.publicador\" \"1234qwer\" \"publicador@alu.uclm.es\" \"publicador\" Esta compartida por el usuario",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Dejar de compartir publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "compartirPublicacionesTest.Usuario_conectado_quiere_dejar_de_compartir_una_publicacion()"
});
formatter.result({
  "duration": 911498190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "publicador.publicador",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 25
    },
    {
      "val": "publicador@alu.uclm.es",
      "offset": 36
    },
    {
      "val": "publicador",
      "offset": 61
    }
  ],
  "location": "compartirPublicacionesTest.Esta_compartida_por_el_usuario(String,String,String,String)"
});
formatter.result({
  "duration": 666083791,
  "status": "passed"
});
formatter.match({
  "location": "compartirPublicacionesTest.Dejar_de_compartir_publicacion()"
});
formatter.result({
  "duration": 12025412367,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Dejar de compartir una publicacion erroneamente",
  "description": "",
  "id": "compartir-publicaciones;dejar-de-compartir-una-publicacion-erroneamente;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Usuario conectado quiere dejar de compartir una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "\"compartir.compartir\" \"1234qwer\" \"compartir@alu.uclm.es\" \"compartir\" No esta compartida por el usuario",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "No dejar de compartir publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "compartirPublicacionesTest.Usuario_conectado_quiere_dejar_de_compartir_una_publicacion()"
});
formatter.result({
  "duration": 812575504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compartir.compartir",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 23
    },
    {
      "val": "compartir@alu.uclm.es",
      "offset": 34
    },
    {
      "val": "compartir",
      "offset": 58
    }
  ],
  "location": "compartirPublicacionesTest.No_esta_compartida_por_el_usuario(String,String,String,String)"
});
formatter.result({
  "duration": 303911011,
  "status": "passed"
});
formatter.match({
  "location": "compartirPublicacionesTest.No_dejar_de_compartir_publicacion()"
});
formatter.result({
  "duration": 12285547095,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Dejar de compartir una publicacion erroneamente",
  "description": "",
  "id": "compartir-publicaciones;dejar-de-compartir-una-publicacion-erroneamente;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Usuario conectado quiere dejar de compartir una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "\"publicador.publicador\" \"1234qwer\" \"publicador@alu.uclm.es\" \"publicador\" No esta compartida por el usuario",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "No dejar de compartir publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "compartirPublicacionesTest.Usuario_conectado_quiere_dejar_de_compartir_una_publicacion()"
});
formatter.result({
  "duration": 812087483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "publicador.publicador",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 25
    },
    {
      "val": "publicador@alu.uclm.es",
      "offset": 36
    },
    {
      "val": "publicador",
      "offset": 61
    }
  ],
  "location": "compartirPublicacionesTest.No_esta_compartida_por_el_usuario(String,String,String,String)"
});
formatter.result({
  "duration": 303510438,
  "status": "passed"
});
formatter.match({
  "location": "compartirPublicacionesTest.No_dejar_de_compartir_publicacion()"
});
formatter.result({
  "duration": 11261439056,
  "status": "passed"
});
formatter.uri('cucumberJava\CreacionUsuario.feature');
formatter.feature({
  "line": 1,
  "name": "Creacion de un nuevo usuario",
  "description": "",
  "id": "creacion-de-un-nuevo-usuario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Creacion correcta de cuenta",
  "description": "",
  "id": "creacion-de-un-nuevo-usuario;creacion-correcta-de-cuenta;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario en pagina de creacion",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"fernando.cozar\" \"fernando@alu.uclm.es\" \"1234Fernando\" \"1234Fernando\" \"fer\" validos",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Mensaje de validacion y usuario insertado",
  "keyword": "Then "
});
formatter.match({
  "location": "crearCuentaTest.Usuario_en_pagina_de_creacion()"
});
formatter.result({
  "duration": 18251431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernando.cozar",
      "offset": 1
    },
    {
      "val": "fernando@alu.uclm.es",
      "offset": 18
    },
    {
      "val": "1234Fernando",
      "offset": 41
    },
    {
      "val": "1234Fernando",
      "offset": 56
    },
    {
      "val": "fer",
      "offset": 71
    }
  ],
  "location": "crearCuentaTest.validos(String,String,String,String,String)"
});
formatter.result({
  "duration": 838522,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_validacion_y_usuario_insertado()"
});
formatter.result({
  "duration": 5598161387,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Creacion incorrecta de cuenta por email invalido",
  "description": "",
  "id": "creacion-de-un-nuevo-usuario;creacion-incorrecta-de-cuenta-por-email-invalido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Usuario en pagina de creacion",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "\"fernando.cozar\" \"fernando@alu.uclm.ese\" \"1234Fernando\" \"1234Fernando\" Email no tiene extension alu.uclm.es",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Mensaje de error a la creacion email invaildo",
  "keyword": "Then "
});
formatter.match({
  "location": "crearCuentaTest.Usuario_en_pagina_de_creacion()"
});
formatter.result({
  "duration": 83570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernando.cozar",
      "offset": 1
    },
    {
      "val": "fernando@alu.uclm.ese",
      "offset": 18
    },
    {
      "val": "1234Fernando",
      "offset": 42
    },
    {
      "val": "1234Fernando",
      "offset": 57
    }
  ],
  "location": "crearCuentaTest.Email_no_tiene_extension_alu_uclm_es(String,String,String,String)"
});
formatter.result({
  "duration": 443944,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_email_invaildo()"
});
formatter.result({
  "duration": 94853,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Creacion incorrecta de cuenta por password que no coinciden",
  "description": "",
  "id": "creacion-de-un-nuevo-usuario;creacion-incorrecta-de-cuenta-por-password-que-no-coinciden;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Usuario en pagina de creacion",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "\"fernando.cozar\" \"fernando@alu.uclm.es\" \"1234\" \"12345\" Password y su confirmacion no coinciden",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Mensaje de error a la creacion password no coinciden",
  "keyword": "Then "
});
formatter.match({
  "location": "crearCuentaTest.Usuario_en_pagina_de_creacion()"
});
formatter.result({
  "duration": 64881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernando.cozar",
      "offset": 1
    },
    {
      "val": "fernando@alu.uclm.es",
      "offset": 18
    },
    {
      "val": "1234",
      "offset": 41
    },
    {
      "val": "12345",
      "offset": 48
    }
  ],
  "location": "crearCuentaTest.Password_y_su_confirmacion_no_coinciden(String,String,String,String)"
});
formatter.result({
  "duration": 307482,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_password_no_coinciden()"
});
formatter.result({
  "duration": 80397,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Creacion incorrecta de cuenta por nombre invalido",
  "description": "",
  "id": "creacion-de-un-nuevo-usuario;creacion-incorrecta-de-cuenta-por-nombre-invalido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Usuario en pagina de creacion",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "\"fernandocozar\" \"fernando@alu.uclm.es\" \"1234Fernando\" \"1234Fernando\" Nombre no tiene el formato adecuado",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Mensaje de error a la creacion nombre invalido",
  "keyword": "Then "
});
formatter.match({
  "location": "crearCuentaTest.Usuario_en_pagina_de_creacion()"
});
formatter.result({
  "duration": 69113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernandocozar",
      "offset": 1
    },
    {
      "val": "fernando@alu.uclm.es",
      "offset": 17
    },
    {
      "val": "1234Fernando",
      "offset": 40
    },
    {
      "val": "1234Fernando",
      "offset": 55
    }
  ],
  "location": "crearCuentaTest.Nombre_no_tiene_el_formato_adecuado(String,String,String,String)"
});
formatter.result({
  "duration": 282445,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_nombre_invalido()"
});
formatter.result({
  "duration": 81455,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Creacion incorrecta de cuenta por password poco segura",
  "description": "",
  "id": "creacion-de-un-nuevo-usuario;creacion-incorrecta-de-cuenta-por-password-poco-segura;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@Scenario5"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "Usuario en pagina de creacion",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "\"fernando.cozar\" \"fernando@alu.uclm.es\" \"1234\" \"1234\" Password no tiene la seguridad adecuada",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Mensaje de error a la creacion password poco segura",
  "keyword": "Then "
});
formatter.match({
  "location": "crearCuentaTest.Usuario_en_pagina_de_creacion()"
});
formatter.result({
  "duration": 39493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fernando.cozar",
      "offset": 1
    },
    {
      "val": "fernando@alu.uclm.es",
      "offset": 18
    },
    {
      "val": "1234",
      "offset": 41
    },
    {
      "val": "1234",
      "offset": 48
    }
  ],
  "location": "crearCuentaTest.Password_no_tiene_la_seguridad_adecuada(String,String,String,String)"
});
formatter.result({
  "duration": 186181,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_password_poco_segura()"
});
formatter.result({
  "duration": 60650,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Creacion incorrecta de cuenta cuenta  ya existente",
  "description": "",
  "id": "creacion-de-un-nuevo-usuario;creacion-incorrecta-de-cuenta-cuenta--ya-existente;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@Scenario6"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "Usuario en pagina de creacion",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "\"milhouse.milhouse\" \"milhouse@alu.uclm.es\" \"1234milhouse\" \"1234milhouse\" Nombre que intenta registrar ya existe",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "Mensaje de error a la creacion cuenta ya existente",
  "keyword": "Then "
});
formatter.match({
  "location": "crearCuentaTest.Usuario_en_pagina_de_creacion()"
});
formatter.result({
  "duration": 41962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    },
    {
      "val": "milhouse@alu.uclm.es",
      "offset": 21
    },
    {
      "val": "1234milhouse",
      "offset": 44
    },
    {
      "val": "1234milhouse",
      "offset": 59
    }
  ],
  "location": "crearCuentaTest.Nombre_que_intenta_registrar_ya_existe(String,String,String,String)"
});
formatter.result({
  "duration": 167846,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_cuenta_ya_existente()"
});
formatter.result({
  "duration": 151741115,
  "status": "passed"
});
formatter.uri('cucumberJava\EliminarAmigo.feature');
formatter.feature({
  "line": 1,
  "name": "Eliminar de la lista de amigos a otro usuario",
  "description": "",
  "id": "eliminar-de-la-lista-de-amigos-a-otro-usuario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Revocacion de amistad valido",
  "description": "",
  "id": "eliminar-de-la-lista-de-amigos-a-otro-usuario;revocacion-de-amistad-valido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Usuario conectado para borrar a otro usuario",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "\"borrado1.borrado1\" \"1234qwer\" \"borrado1@alu.uclm.es\" \"borrado1\" Eliminar un usuario que es tu amigo",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Borrar amigo de ambos usuarios",
  "keyword": "Then "
});
formatter.match({
  "location": "borrarAmigoTest.Usuario_conectado_para_borrar_a_otro_usuario()"
});
formatter.result({
  "duration": 5417588935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "borrado1.borrado1",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 21
    },
    {
      "val": "borrado1@alu.uclm.es",
      "offset": 32
    },
    {
      "val": "borrado1",
      "offset": 55
    }
  ],
  "location": "borrarAmigoTest.Eliminar_un_usuario_que_es_tu_amigo(String,String,String,String)"
});
formatter.result({
  "duration": 2147529463,
  "status": "passed"
});
formatter.match({
  "location": "borrarAmigoTest.Borrar_amigo_de_ambos_usuarios()"
});
formatter.result({
  "duration": 6243853013,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Revocacion de amistad invalido",
  "description": "",
  "id": "eliminar-de-la-lista-de-amigos-a-otro-usuario;revocacion-de-amistad-invalido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado para borrar a otro usuario",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"borrado2.borrado2\" \"1234qwer\" \"borrado2@alu.uclm.es\" \"borrado2\" Eliminar un usuario que no es tu amigo",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Mensaje de error a la revocacion de usuario",
  "keyword": "Then "
});
formatter.match({
  "location": "borrarAmigoTest.Usuario_conectado_para_borrar_a_otro_usuario()"
});
formatter.result({
  "duration": 5421593248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "borrado2.borrado2",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 21
    },
    {
      "val": "borrado2@alu.uclm.es",
      "offset": 32
    },
    {
      "val": "borrado2",
      "offset": 55
    }
  ],
  "location": "borrarAmigoTest.Eliminar_un_usuario_que_no_es_tu_amigo(String,String,String,String)"
});
formatter.result({
  "duration": 407620466,
  "status": "passed"
});
formatter.match({
  "location": "borrarAmigoTest.Mensaje_de_error_a_la_revocacion_de_usuario()"
});
formatter.result({
  "duration": 5322667036,
  "status": "passed"
});
formatter.uri('cucumberJava\Login.feature');
formatter.feature({
  "line": 1,
  "name": "Logeo al sistema",
  "description": "",
  "id": "logeo-al-sistema",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Login exitoso con credenciales validas",
  "description": "",
  "id": "logeo-al-sistema;login-exitoso-con-credenciales-validas;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Usuario en pagina de login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "\"milhouse.milhouse\" y \"1234milhouse\" correctas",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Mensaje de bienvenida al login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginTest.Usuario_en_pagina_de_login()"
});
formatter.result({
  "duration": 15520416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    },
    {
      "val": "1234milhouse",
      "offset": 23
    }
  ],
  "location": "loginTest.y_correctas(String,String)"
});
formatter.result({
  "duration": 758831,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.Mensaje_de_bienvenida_al_login()"
});
formatter.result({
  "duration": 77322808,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login fallido por nombre invalido",
  "description": "",
  "id": "logeo-al-sistema;login-fallido-por-nombre-invalido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario en pagina de login",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"noexiste\" incorrecto y \"1234\" correcta",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Mensaje de error al login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginTest.Usuario_en_pagina_de_login()"
});
formatter.result({
  "duration": 98027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noexiste",
      "offset": 1
    },
    {
      "val": "1234",
      "offset": 25
    }
  ],
  "location": "loginTest.incorrecto_y_correcta(String,String)"
});
formatter.result({
  "duration": 225675,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.Mensaje_de_error_al_login()"
});
formatter.result({
  "duration": 92815720,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login fallido por passoword invalido",
  "description": "",
  "id": "logeo-al-sistema;login-fallido-por-passoword-invalido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Usuario en pagina de login",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "\"12345\" incorrecta y \"milhouse.milhouse\" correcto",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Mensaje de error al login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginTest.Usuario_en_pagina_de_login()"
});
formatter.result({
  "duration": 42314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 1
    },
    {
      "val": "milhouse.milhouse",
      "offset": 22
    }
  ],
  "location": "loginTest.incorrecta_y_correcto(String,String)"
});
formatter.result({
  "duration": 174898,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.Mensaje_de_error_al_login()"
});
formatter.result({
  "duration": 105399546,
  "status": "passed"
});
formatter.uri('cucumberJava\Publicar.feature');
formatter.feature({
  "line": 1,
  "name": "Publicacion",
  "description": "",
  "id": "publicacion",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Publicacion exitosa",
  "description": "",
  "id": "publicacion;publicacion-exitosa;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Usuario en pagina principal",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "\"milhouse.milhouse\" Publicacion correcta",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Mensaje de exito a la publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "publicarTest.Usuario_en_pagina_principal()"
});
formatter.result({
  "duration": 2683059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    }
  ],
  "location": "publicarTest.Publicacion_correcta(String)"
});
formatter.result({
  "duration": 89904871,
  "status": "passed"
});
formatter.match({
  "location": "publicarTest.Mensaje_de_exito_a_la_publicacion()"
});
formatter.result({
  "duration": 100892402,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Publicacion fallida",
  "description": "",
  "id": "publicacion;publicacion-fallida;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Usuario en pagina principal",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "\"milhouse.milhouse\" Publicacion incorrecta",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Mensaje de fallo a la publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "publicarTest.Usuario_en_pagina_principal()"
});
formatter.result({
  "duration": 81102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    }
  ],
  "location": "publicarTest.Publicacion_incorrecta(String)"
});
formatter.result({
  "duration": 565597,
  "status": "passed"
});
formatter.match({
  "location": "publicarTest.Mensaje_de_fallo_a_la_publicacion()"
});
formatter.result({
  "duration": 94812235,
  "status": "passed"
});
formatter.uri('cucumberJava\SolicitudesAceptar.feature');
formatter.feature({
  "line": 1,
  "name": "Aceptar solicitudes de amistad de otro usuario",
  "description": "",
  "id": "aceptar-solicitudes-de-amistad-de-otro-usuario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Aceptar solicitud valido",
  "description": "",
  "id": "aceptar-solicitudes-de-amistad-de-otro-usuario;aceptar-solicitud-valido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Usuario conectado para aceptar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "\"acepta.acepta\" \"1234qwer\" \"acepta@alu.uclm.es\" \"acepta\" Acepta solicitud de alguien que le ha mandado",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Aceptar como amigo",
  "keyword": "Then "
});
formatter.match({
  "location": "solicitudAceptarTest.Usuario_conectado_para_aceptar()"
});
formatter.result({
  "duration": 5320232924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acepta.acepta",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 17
    },
    {
      "val": "acepta@alu.uclm.es",
      "offset": 28
    },
    {
      "val": "acepta",
      "offset": 49
    }
  ],
  "location": "solicitudAceptarTest.Acepta_solicitud_de_alguien_que_le_ha_mandado(String,String,String,String)"
});
formatter.result({
  "duration": 1636073304,
  "status": "passed"
});
formatter.match({
  "location": "solicitudAceptarTest.Aceptar_como_amigo()"
});
formatter.result({
  "duration": 6142246209,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Aceptar solicitud invalido",
  "description": "",
  "id": "aceptar-solicitudes-de-amistad-de-otro-usuario;aceptar-solicitud-invalido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado para aceptar",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"acepta2.acepta2\" \"1234qwer\" \"acepta2@alu.uclm.es\" \"acepta2\" Acepta solicitud de alguien que no le ha mandado",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Mensaje de error a la aceptacion",
  "keyword": "Then "
});
formatter.match({
  "location": "solicitudAceptarTest.Usuario_conectado_para_aceptar()"
});
formatter.result({
  "duration": 5321003039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acepta2.acepta2",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 19
    },
    {
      "val": "acepta2@alu.uclm.es",
      "offset": 30
    },
    {
      "val": "acepta2",
      "offset": 52
    }
  ],
  "location": "solicitudAceptarTest.Acepta_solicitud_de_alguien_que_no_le_ha_mandado(String,String,String,String)"
});
formatter.result({
  "duration": 406392655,
  "status": "passed"
});
formatter.match({
  "location": "solicitudAceptarTest.Mensaje_de_error_a_la_aceptacion()"
});
formatter.result({
  "duration": 5425053475,
  "status": "passed"
});
formatter.uri('cucumberJava\SolicitudesEnvio.feature');
formatter.feature({
  "line": 1,
  "name": "Enviar solicitudes de amistad a otro usuario",
  "description": "",
  "id": "enviar-solicitudes-de-amistad-a-otro-usuario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Envio de solicitud de amistad valido",
  "description": "",
  "id": "enviar-solicitudes-de-amistad-a-otro-usuario;envio-de-solicitud-de-amistad-valido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Usuario conectado para enviar solicitud",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "\"solicitado.solicitado\" \"1234qwer\" \"solicitado@alu.uclm.es\" \"solicitado\" Selecciona otro usuario sin ser amigos ni tener solicitudes entre ellos",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Envio solicitud al segundo",
  "keyword": "Then "
});
formatter.match({
  "location": "solicitudEnviarTest.Usuario_conectado_para_enviar_solicitud()"
});
formatter.result({
  "duration": 5418329430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "solicitado.solicitado",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 25
    },
    {
      "val": "solicitado@alu.uclm.es",
      "offset": 36
    },
    {
      "val": "solicitado",
      "offset": 61
    }
  ],
  "location": "solicitudEnviarTest.Selecciona_otro_usuario_sin_ser_amigos_ni_tener_solicitudes_entre_ellos(String,String,String,String)"
});
formatter.result({
  "duration": 304512574,
  "status": "passed"
});
formatter.match({
  "location": "solicitudEnviarTest.Envio_solicitud_al_segundo()"
});
formatter.result({
  "duration": 5938585838,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Solicitud invalida porque son amigos",
  "description": "",
  "id": "enviar-solicitudes-de-amistad-a-otro-usuario;solicitud-invalida-porque-son-amigos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado para enviar solicitud",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"solicitado2.solicitado2\" \"1234qwer\" \"solicitado2@alu.uclm.es\" \"solicitado2\" Selecciona a otro usuario siendo su amigo",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "No envio de solicitud",
  "keyword": "Then "
});
formatter.match({
  "location": "solicitudEnviarTest.Usuario_conectado_para_enviar_solicitud()"
});
formatter.result({
  "duration": 5319679669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "solicitado2.solicitado2",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 27
    },
    {
      "val": "solicitado2@alu.uclm.es",
      "offset": 38
    },
    {
      "val": "solicitado2",
      "offset": 64
    }
  ],
  "location": "solicitudEnviarTest.Selecciona_a_otro_usuario_siendo_su_amigo(String,String,String,String)"
});
formatter.result({
  "duration": 2147839765,
  "status": "passed"
});
formatter.match({
  "location": "solicitudEnviarTest.No_envio_de_solicitud()"
});
formatter.result({
  "duration": 6552308193,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Solicitud invalida porque tienen solicitudes pendientes",
  "description": "",
  "id": "enviar-solicitudes-de-amistad-a-otro-usuario;solicitud-invalida-porque-tienen-solicitudes-pendientes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Usuario conectado para enviar solicitud",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "\"solicitado3.solicitado3\" \"1234qwer\" \"solicitado3@alu.uclm.es\" \"solicitado3\" Selecciona a otro usuario teniendo solicitudes pendientes entre ellos",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Solicitud ya enviada",
  "keyword": "Then "
});
formatter.match({
  "location": "solicitudEnviarTest.Usuario_conectado_para_enviar_solicitud()"
});
formatter.result({
  "duration": 6344938295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "solicitado3.solicitado3",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 27
    },
    {
      "val": "solicitado3@alu.uclm.es",
      "offset": 38
    },
    {
      "val": "solicitado3",
      "offset": 64
    }
  ],
  "location": "solicitudEnviarTest.Selecciona_a_otro_usuario_teniendo_solicitudes_pendientes_entre_ellos(String,String,String,String)"
});
formatter.result({
  "duration": 1020941190,
  "status": "passed"
});
formatter.match({
  "location": "solicitudEnviarTest.Solicitud_ya_enviada()"
});
formatter.result({
  "duration": 5425487897,
  "status": "passed"
});
formatter.uri('cucumberJava\SolicitudesRechazo.feature');
formatter.feature({
  "line": 1,
  "name": "Rechazar solicitudes de amistad de otro usuario",
  "description": "",
  "id": "rechazar-solicitudes-de-amistad-de-otro-usuario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Rechazar solicitud valido",
  "description": "",
  "id": "rechazar-solicitudes-de-amistad-de-otro-usuario;rechazar-solicitud-valido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Usuario conectado para rechazar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "\"rechaza.rechaza\" \"1234qwer\" \"rechaza@alu.uclm.es\" \"rechaza\" Rechazar solicitud de alguien que le ha mandado",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Rechazar peticion de amistad",
  "keyword": "Then "
});
formatter.match({
  "location": "solicitudRechazarTest.Usuario_conectado_para_rechazar()"
});
formatter.result({
  "duration": 5422916266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rechaza.rechaza",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 19
    },
    {
      "val": "rechaza@alu.uclm.es",
      "offset": 30
    },
    {
      "val": "rechaza",
      "offset": 52
    }
  ],
  "location": "solicitudRechazarTest.Rechazar_solicitud_de_alguien_que_le_ha_mandado(String,String,String,String)"
});
formatter.result({
  "duration": 1431423139,
  "status": "passed"
});
formatter.match({
  "location": "solicitudRechazarTest.Rechazar_peticion_de_amistad()"
});
formatter.result({
  "duration": 5630146174,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Rechazar solicitud invalido",
  "description": "",
  "id": "rechazar-solicitudes-de-amistad-de-otro-usuario;rechazar-solicitud-invalido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario conectado para rechazar",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"rechaza2.rechaza2\" \"1234qwer\" \"rechaza2@alu.uclm.es\" \"rechaza2\" Rechazar solicitud de alguien que no le ha mandado",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Mensaje de error al rechazo de la peticion",
  "keyword": "Then "
});
formatter.match({
  "location": "solicitudRechazarTest.Usuario_conectado_para_rechazar()"
});
formatter.result({
  "duration": 5730789276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rechaza2.rechaza2",
      "offset": 1
    },
    {
      "val": "1234qwer",
      "offset": 21
    },
    {
      "val": "rechaza2@alu.uclm.es",
      "offset": 32
    },
    {
      "val": "rechaza2",
      "offset": 55
    }
  ],
  "location": "solicitudRechazarTest.Rechazar_solicitud_de_alguien_que_no_le_ha_mandado(String,String,String,String)"
});
formatter.result({
  "duration": 305290446,
  "status": "passed"
});
formatter.match({
  "location": "solicitudRechazarTest.Mensaje_de_error_al_rechazo_de_la_peticion()"
});
formatter.result({
  "duration": 5937707118,
  "status": "passed"
});
formatter.uri('cucumberJava\consultaMeGustas.feature');
formatter.feature({
  "line": 1,
  "name": "Consultar Me gusta",
  "description": "",
  "id": "consultar-me-gusta",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Usuario quiere saber quien le ha dado a me gusta",
  "description": "",
  "id": "consultar-me-gusta;usuario-quiere-saber-quien-le-ha-dado-a-me-gusta;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario conectado consulta usuarios que han dado me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"milhouse.milhouse\" Activacion correcta la consulta",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Se muestra correctamente lo usuarios que han dado me gusta",
  "keyword": "Then "
});
formatter.match({
  "location": "consultaMeGustaTest.Usuario_conectado_consulta_usuarios_que_han_dado_me_gusta()"
});
formatter.result({
  "duration": 97073918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    }
  ],
  "location": "consultaMeGustaTest.Activacion_correcta_la_consulta(String)"
});
formatter.result({
  "duration": 512855693,
  "status": "passed"
});
formatter.match({
  "location": "consultaMeGustaTest.Se_muestra_correctamente_lo_usuarios_que_han_dado_me_gusta()"
});
formatter.result({
  "duration": 305547856,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Usuario quiere saber quien le ha dado a me gusta",
  "description": "",
  "id": "consultar-me-gusta;usuario-quiere-saber-quien-le-ha-dado-a-me-gusta;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario conectado consulta usuarios que han dado me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"miguel.miguel\" Activacion correcta la consulta",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Se muestra correctamente lo usuarios que han dado me gusta",
  "keyword": "Then "
});
formatter.match({
  "location": "consultaMeGustaTest.Usuario_conectado_consulta_usuarios_que_han_dado_me_gusta()"
});
formatter.result({
  "duration": 97225543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "miguel.miguel",
      "offset": 1
    }
  ],
  "location": "consultaMeGustaTest.Activacion_correcta_la_consulta(String)"
});
formatter.result({
  "duration": 512865919,
  "status": "passed"
});
formatter.match({
  "location": "consultaMeGustaTest.Se_muestra_correctamente_lo_usuarios_que_han_dado_me_gusta()"
});
formatter.result({
  "duration": 303603529,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Usuario quiere saber quien le ha dado a me gusta",
  "description": "",
  "id": "consultar-me-gusta;usuario-quiere-saber-quien-le-ha-dado-a-me-gusta;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario conectado consulta usuarios que han dado me gusta",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"daniel.gomez\" Activacion correcta la consulta",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Se muestra correctamente lo usuarios que han dado me gusta",
  "keyword": "Then "
});
formatter.match({
  "location": "consultaMeGustaTest.Usuario_conectado_consulta_usuarios_que_han_dado_me_gusta()"
});
formatter.result({
  "duration": 97431118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "daniel.gomez",
      "offset": 1
    }
  ],
  "location": "consultaMeGustaTest.Activacion_correcta_la_consulta(String)"
});
formatter.result({
  "duration": 510510793,
  "status": "passed"
});
formatter.match({
  "location": "consultaMeGustaTest.Se_muestra_correctamente_lo_usuarios_que_han_dado_me_gusta()"
});
formatter.result({
  "duration": 305322535,
  "status": "passed"
});
formatter.uri('cucumberJava\editarPublicacionBD.feature');
formatter.feature({
  "line": 1,
  "name": "Edicion de una publicacion en la BD",
  "description": "",
  "id": "edicion-de-una-publicacion-en-la-bd",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Edicion correcta de publicacion",
  "description": "",
  "id": "edicion-de-una-publicacion-en-la-bd;edicion-correcta-de-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "El usuario quiere editar una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"milhouse.milhouse\" Edicion correcta",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Mensaje de exito en la edicion de la publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "editarPublicacionBDTest.El_usuario_quiere_editar_una_publicacion()"
});
formatter.result({
  "duration": 97721674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    }
  ],
  "location": "editarPublicacionBDTest.Edicion_correcta(String)"
});
formatter.result({
  "duration": 305115901,
  "status": "passed"
});
formatter.match({
  "location": "editarPublicacionBDTest.Mensaje_de_exito_en_la_edicion_de_la_publicacion()"
});
formatter.result({
  "duration": 101382187,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Edicion incorrecta de publicacion",
  "description": "",
  "id": "edicion-de-una-publicacion-en-la-bd;edicion-incorrecta-de-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "El usuario quiere editar una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"milhouse.milhouse\" Edicion incorrecto",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Mensaje de error en la edicion de la publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "editarPublicacionBDTest.El_usuario_quiere_editar_una_publicacion()"
});
formatter.result({
  "duration": 99479115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    }
  ],
  "location": "editarPublicacionBDTest.Edicion_incorrecto(String)"
});
formatter.result({
  "duration": 100765107,
  "status": "passed"
});
formatter.match({
  "location": "editarPublicacionBDTest.Mensaje_de_error_en_la_edicion_de_la_publicacion()"
});
formatter.result({
  "duration": 40903,
  "status": "passed"
});
formatter.uri('cucumberJava\eliminarPublicacionBD.feature');
formatter.feature({
  "line": 1,
  "name": "eliminar publicacion DB",
  "description": "",
  "id": "eliminar-publicacion-db",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Eliminacion correcta de publicacion",
  "description": "",
  "id": "eliminar-publicacion-db;eliminacion-correcta-de-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Usuario quiere eliminar una publiacion",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"milhouse.milhouse\" Eliminacion correcta",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Mensaje de exito en la eliminacion de publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "eliminarPublicacionBDTest.Usuario_quiere_eliminar_una_publiacion()"
});
formatter.result({
  "duration": 101548269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    }
  ],
  "location": "eliminarPublicacionBDTest.Eliminacion_correcta(String)"
});
formatter.result({
  "duration": 408453699,
  "status": "passed"
});
formatter.match({
  "location": "eliminarPublicacionBDTest.Mensaje_de_exito_en_la_eliminacion_de_publicacion()"
});
formatter.result({
  "duration": 101530990,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Eliminacion incorrecta de publicacion",
  "description": "",
  "id": "eliminar-publicacion-db;eliminacion-incorrecta-de-publicacion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Usuario quiere eliminar una publiacion",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"milhouse.milhouse\" Eliminacion incorrecta",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Mensaje de fallo en la eliminacion de publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "eliminarPublicacionBDTest.Usuario_quiere_eliminar_una_publiacion()"
});
formatter.result({
  "duration": 97336264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milhouse.milhouse",
      "offset": 1
    }
  ],
  "location": "eliminarPublicacionBDTest.Eliminacion_incorrecta(String)"
});
formatter.result({
  "duration": 203983368,
  "status": "passed"
});
formatter.match({
  "location": "eliminarPublicacionBDTest.Mensaje_de_fallo_en_la_eliminacion_de_publicacion()"
});
formatter.result({
  "duration": 101272875,
  "status": "passed"
});
});