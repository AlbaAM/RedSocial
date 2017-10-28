<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Bienvenido</title>
<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="estilo.css" />
</head>
<body>
 	<jsp:useBean id="usuarioConectado" scope="session" class="com.intravita.proyectointranet.modelo.Usuario"></jsp:useBean>
 
 	<!--  
	 	<p>El nombre es: <jsp:getProperty name="usuarioConectado" property="nombre"/></p>
	 	<p>El email es: <jsp:getProperty name="usuarioConectado" property="email"/></p>
	-->
	<div class="row bg-primary">
		<div class="col-md-5 col-md-offset-1">
			<strong></strong><h1 style="color: white; font-family: Verdana; font-size:60px;"><em><strong>  <img src="http://www.emprender-facil.com/wp-content/uploads/2014/09/La-red-social-LinkedIn-para-tu-negocio-texto1.png" style="width:64px; height:64px;" class="img-circle"> IntraVita</strong></em></h1></strong>
		</div>
		
		<div class="col-md-2 col-md-offset-4">
				<button type="button" class="btn btn-primary btn-md"  style="border-width: 10px;">?</button>
		</div>
	</div>
	
	
	<div class="row">
		<div class="col-md-5 col-md-offset-1">
			<h3>
				<jsp:getProperty name="usuarioConectado" property="nombre"/>
			</h3>
		</div>

		<br/>

		<div class="col-md-1 col-md-offset-4">
			<form action="logout" method="GET">
				<button class="btn btn-danger btn-block btn-md login" type="submit">Salir</button>
			</form>	
			<br/>
			
			
			<div class="btn-group">
				<button type="button" class="btn btn-info btn-block btn-md">Ajustes</button>
				<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
					<span class="caret"></span>
				</button>
				<ul class="dropdown-menu" role="menu">
					<li><form action="" method="GET">
							<button class="btn btn-primary btn-block btn-md login" type="submit">Cambiar Rol</button>
						</form>
					<li><form action="irBorradoCuenta" method="GET">
							<button class="btn btn-primary btn-block btn-md login" type="submit">Borrar Cuenta</button>
						</form>	
				</ul>
			</div>
			
					
		</div>
	</div>
	
	
	 <form action="crearPublicacion" method="post" id="formlogin">
    	<div class="row">
	 		<div class="col-md-8 col-md-offset-2">
			  <label for="comment">Realizar publicaci�n</label>
			  <textarea name="txtIntroducirTexto" placeholder="�Qu� tal el d�a?" class="form-control" rows="5" id="comment"></textarea>
			</div>  
		</div>
		
		<br/>
		
		<div class="row">
			<div class="col-md-1 col-md-offset-9">
				<button class="btn btn-primary btn-block login" formaction="crearPublicacionPrivada" type="submit">Borrador</button>
				<button class="btn btn-primary btn-block login" type="submit">Enviar</button>
			</div>	  
		</div>
	</form>
	
	<br/>
	
	
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-default">
				 <div class="panel-body">
					<form action="listarPublicacion" method="post">
						<button class="btn btn-info btn-block login" type="submit">Mostrar Publicaciones</button>
					</form>
				</div>
				
				${publicaciones}
				
			</div>	
		</div>
	</div>
	
	<div class="panel-footer">
		<h5>� Copyright 2017 IntraVita. Todos los derechos reservados.</h5>
	</div>
	

</body>
</html>