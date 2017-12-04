<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%-- JSP para el registro de un usuario en la red social --%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Registro - Intravita</title>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		
		<!-- jQuery CDN -->
		<script  src = " http://code.jquery.com/jquery-1.10.1.min.js " > </script>
		
		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		
		<script src='https://www.google.com/recaptcha/api.js'></script>
			
		<link rel="shortcut icon" href="https://thumb.ibb.co/h7RMiR/Intra_Vita_Favicon.png" type="image/x-icon">
		<link rel="icon" href="/favicon.ico" type="image/x-icon">

		<style>

	body {
		background-color: #2CCBE7;
		width: 100%;
		heigth: 100%;
	}

	.boton {
		  padding: 15px 35px;
		  font-size: 18px;
		  cursor: pointer;
		  outline: none;
		  color: #fff;
		  background-color: #166EE7;
		  border: 2px;
		  border-color: #FFFFFF;
		  border-radius: 10px;
		  box-shadow: 0 3px #999;
	}
	
	.boton:hover {
		 background: rgba(41, 128, 185, 0);
		 color: #0058A3;
		 box-shadow: inset 0 0 0 3px #0058A3;
	}
	
	.boton:active {
		 background-color: #FFFFFF;
		 color: #0058A3;
		 transform: translateY(4px);
	}
	
	spam {
		padding: 20px;
		color: #DF0101;
		margin-left: 12px;
		font-weight: bold;
		font-size: 15px;
	}
</style>

<style>
/
* Estilos para la forma * /
		forma {
	max-width: 400 px;
	margen: 0 auto;
}

.formEmail {
	border-radius: 4 px 4 px 0 0;
}

.formPassword {
	border-radius: 0 0 4 px 4 px;
	margin-top: -1 px;
}
</style>
		
</head>

<body>

	<div class="row bg-primary">
		<div class="col-md-5 col-md-offset-1">
			<img src="http://i65.tinypic.com/2dvizyh.png" style="width:30%;">
		</div>
		
		<div class="col-md-2 col-md-offset-4">
				<button type="button" class="btn btn-primary btn-md" data-toggle="modal" data-target="#miModal" style="border-width: 10px;">
					<strong>?</strong>
				</button>
		</div>
	</div>
	
	<div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">Ayuda</h4>
					</div>
					<div class="modal-body">
						Para poder usar IntraVita tendr&aacute; que rellenar el cuestionario con sus datos personales, 
						respetando las pol&iacute;ticas de seguridad y estructuras que son necesarias.<br><br>
						- Para el nombre de usuario: nombre.apellido<br>
						- Para el mail: ser&aacute; el corporativo de la empresa, con la extensi&oacute;n @alu.uclm.es<br>
						- Para la contrase&ntilde;a: longitud mínima de 8 caracteres, utilizando letras y n&uacute;meros<br>
						- Para la confirmaci&oacute;n: tiene que ser igual que la contrase&ntilde;a anterior<br>
						- Para la respuesta: utilice una respuesta de la que se acordar&aacute; en el futuro<br>
						- Foto de perfil: introduzca una foto suya preferentemente con fondo blanco
						
					</div>
				</div>
			</div>
		</div>

	<div class="row">
		<div class="col-md-1 col-md-offset-10">
			<br>
			<form action="irLogin" method="GET">
				<button class="btn btn-danger btn-block btn-md login" type="submit">
					<strong><span class="glyphicon glyphicon-menu-left"></span>&nbsp;Volver</strong>
				</button>
			</form>	
					
		<br/>
		</div>
	</div>


	<form action="registrar" method="POST" enctype="multipart/form-data">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<label for="usr" style="color: white; font-size: 15px;">Usuario:</label>
				<input type="text" class="form-control" id="usr"
					name="txtUsuarioNombre" placeholder="usuario"
					value=<%=request.getAttribute("usuarioRegistro")%>>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<label for="email" style="color: white; font-size: 15px">Email:</label>
				<input type="text" class="form-control" id="email" name="txtEmail"
					placeholder="@uclm.es | @alu.uclm.es"
					value=<%=request.getAttribute("emailRegistro")%>>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<label for="pwd" style="color: white; font-size: 15px">Contraseña:</label>
				<input type="password" class="form-control" id="pwd"
					name="txtUsuarioClave" placeholder="password" autocomplete="off">
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<label for="pwd1" style="color: white; font-size: 15px">Confirmar
					Contraseña:</label> <input type="password" class="form-control" id="pwd1"
					name="txtUsuarioClave1" placeholder="confirmacion password" autocomplete="off">
			</div>
		</div>
		
	<%--Script fotos DANI --%>
		<!-- <script type="text/javascript" src="./cargarImagenes.js"></script>-->
		
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<label for="usr" style="color:white; font-size:15px">¿Cual es tu mejor amigo/a de la infancia?</label>
				<input name="txtRespuesta" type="text" class="form-control" id="usr" placeholder="respuesta">
			</div>
		</div>
		
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
			<label for="imagen" style="color:white; font-size:15px">Avatar:</label>
			<label class="control-label" style="color:white; font-size:15px">Select File</label>
			
			<%--Fotos Dani --%>
			<input id="input-b5" name="fichero" type="file" onchange="cargarArchivo(this)">
			<input type="hidden" name="nombreImagen" value=""/>
			<br><br>
			<script>
				/*$(document).on('ready', function() {
				    $("#input-b5").fileinput({showCaption: false});
				});*/
			</script>
			
			<br>
			
			<%--Foto DANI --%>
			<iframe name="cosa" style="display: none;"></iframe>
			
			
			</div>
			<div class="col-md-6 col-md-offset-3">
				<div class="g-recaptcha" data-callback="recaptchaCallback" data-sitekey="6Lde_DoUAAAAAJFdrIN8t1d_Jk_OMmDw6lj7fQx2"></div>
			</div>

<Br>
		</div>
		<%--By JA --%>
		<% String alertaRegistro = (String)session.getAttribute("alertaRegistro");
			if (alertaRegistro != null) { %>
				<script>
				alert ("Se ha registrado corectamente.");
				//window.location = "https://intravitawebapp.herokuapp.com/irLogin";
				window.location = "http://localhost:8080/IntraVita/irLogin";
				</script>	
		<% 		session.setAttribute("alertaRegistro", null);
			}%>
				
		<div class="row">
			<div class="col-md-2 col-md-offset-5">

					<br/>
					<button id="btn-register" type="submit" disabled class="boton login"><strong><span class="glyphicon glyphicon-ok-circle"></span> &nbsp;Registrar</strong></button>	
					<br>
					<br>
			</div>
		
			<div class="col-md-3">
				<br/>
				<span><em>${alerta}</em></span>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
			</div>
		</div>	
	
	<div class="col-md-12" style="position: fixed; bottom: 0;">
		<div class="panel-footer">
			&copy; Copyright 2017 IntraVita. Todos los derechos reservados.
		</div>
	</div>

</body>
	<script>
	
	function recaptchaCallback(){
		$('#btn-register').prop('disabled','');
	}
	</script>
</html>