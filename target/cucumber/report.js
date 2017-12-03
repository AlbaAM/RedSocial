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
  "duration": 7417498138,
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
  "duration": 4040641,
  "status": "passed"
});
formatter.match({
  "location": "borrarCuentaTest.Borrar_cuenta_y_cambiar_publicaciones_de_propietario()"
});
formatter.result({
  "duration": 4662861221,
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
  "duration": 191924642,
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
  "duration": 69818,
  "status": "passed"
});
formatter.match({
  "location": "borrarCuentaTest.No_se_borra_cuenta()"
});
formatter.result({
  "duration": 32441,
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
  "duration": 3090690,
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
  "duration": 250006,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_validacion_y_usuario_insertado()"
});
formatter.result({
  "duration": 4624104352,
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
  "duration": 78281,
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
  "duration": 498248,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_email_invaildo()"
});
formatter.result({
  "duration": 95207,
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
  "duration": 59239,
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
  "duration": 156209,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_password_no_coinciden()"
});
formatter.result({
  "duration": 41962,
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
  "duration": 34909,
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
  "duration": 145278,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_nombre_invalido()"
});
formatter.result({
  "duration": 42667,
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
  "duration": 35614,
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
  "duration": 184772,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_password_poco_segura()"
});
formatter.result({
  "duration": 24331,
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
  "duration": 20099,
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
  "duration": 75461,
  "status": "passed"
});
formatter.match({
  "location": "crearCuentaTest.Mensaje_de_error_a_la_creacion_cuenta_ya_existente()"
});
formatter.result({
  "duration": 65602327,
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
  "duration": 4311325079,
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
  "duration": 1286738840,
  "status": "passed"
});
formatter.match({
  "location": "borrarAmigoTest.Borrar_amigo_de_ambos_usuarios()"
});
formatter.result({
  "duration": 4795888553,
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
  "duration": 4409616790,
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
  "duration": 196171212,
  "status": "passed"
});
formatter.match({
  "location": "borrarAmigoTest.Mensaje_de_error_a_la_revocacion_de_usuario()"
});
formatter.result({
  "duration": 4425556854,
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
  "duration": 14251733,
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
  "duration": 686546,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.Mensaje_de_bienvenida_al_login()"
});
formatter.result({
  "duration": 57672317,
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
  "duration": 78986,
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
  "duration": 219328,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.Mensaje_de_error_al_login()"
});
formatter.result({
  "duration": 65843517,
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
  "duration": 21510,
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
  "duration": 55714,
  "status": "passed"
});
formatter.match({
  "location": "loginTest.Mensaje_de_error_al_login()"
});
formatter.result({
  "duration": 69526604,
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
  "duration": 4487546969,
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
  "duration": 1009677228,
  "status": "passed"
});
formatter.match({
  "location": "solicitudAceptarTest.Aceptar_como_amigo()"
});
formatter.result({
  "duration": 4768286731,
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
  "duration": 4326787347,
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
  "duration": 263011577,
  "status": "passed"
});
formatter.match({
  "location": "solicitudAceptarTest.Mensaje_de_error_a_la_aceptacion()"
});
formatter.result({
  "duration": 4630553722,
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
  "duration": 4534687666,
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
  "duration": 184894511,
  "status": "passed"
});
formatter.match({
  "location": "solicitudEnviarTest.Envio_solicitud_al_segundo()"
});
formatter.result({
  "duration": 4900454735,
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
  "duration": 4550232798,
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
  "duration": 1284843170,
  "status": "passed"
});
formatter.match({
  "location": "solicitudEnviarTest.No_envio_de_solicitud()"
});
formatter.result({
  "duration": 4922693953,
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
  "duration": 4585536839,
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
  "duration": 688860750,
  "status": "passed"
});
formatter.match({
  "location": "solicitudEnviarTest.Solicitud_ya_enviada()"
});
formatter.result({
  "duration": 4888753484,
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
  "duration": 4586583054,
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
  "duration": 900288300,
  "status": "passed"
});
formatter.match({
  "location": "solicitudRechazarTest.Rechazar_peticion_de_amistad()"
});
formatter.result({
  "duration": 5252725732,
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
  "duration": 4454835017,
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
  "duration": 213135276,
  "status": "passed"
});
formatter.match({
  "location": "solicitudRechazarTest.Mensaje_de_error_al_rechazo_de_la_peticion()"
});
formatter.result({
  "duration": 4362968699,
  "status": "passed"
});
});