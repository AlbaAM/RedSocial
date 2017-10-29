<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Recuperar Credenciales</title>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link REL=StyleSheet HREF="css/login.css" TYPE="text/css" MEDIA=screen>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<style>
body {
background: url(http://www.color-hex.com/palettes/16811.png);
background-size:100%;
width: 100%;
heigth: 100%;
}


.boton {
  padding: 15px 35px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #166EE7;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px #999;
}

.boton:hover {background-color: #21DD27}

.b:active {
  background-color: #21DD27;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}


spam {
    padding: 20px;
    color: #3629D3;
    margin-left: 12px;
	font-weight: bold;
	font-size: 20px;
}
</style>


</head>
<body>

	<div class="row bg-primary">
		<div class="col-md-5 col-md-offset-1">
			<h1 style="color: white; font-family: Verdana; font-size:40px;">
				<strong></strong><h1 style="color: white; font-family: Verdana; font-size:60px;"><em><strong>  <img src="http://www.emprender-facil.com/wp-content/uploads/2014/09/La-red-social-LinkedIn-para-tu-negocio-texto1.png" style="width:64px; height:64px;" class="img-circle"> IntraVita</strong></em></h1></strong>
		</div>
		
		<div class="col-md-2 col-md-offset-4">
				<button type="button" class="btn btn-primary btn-md"  style="border-width: 10px;">?</button>
		</div>
	</div>
	

	<div class="row">
		<div class="col-md-1 col-md-offset-10">
			<br>
			<form action="irLogin" method="GET">
				<button class="btn btn-danger btn-block btn-md login" type="submit">Volver</button>
			</form>	
					
		<br/>
		</div>
	</div>

	<form action="recuperarCredenciales" method="POST">
		<div class="row">
		 	<div class="col-md-8 col-md-offset-2">
		 		<label for="usr" style="color:white; font-size:15px;">Usuario:</label>
				<input name="txtUsuarioNombre" type="text" class="form-control" id="usr" placeholder="usuario">
				<br>
			</div>  
		</div>
		
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<label for="usr" style="color:white; font-size:15px;">�Qui�n fue tu mejor amigo/a de la infancia?</label>
				<input name="txtRespuesta" type="text" class="form-control" id="usr" placeholder="respuesta">
				<br>
			</div>
		</div>
		
		<div class="row">
			<div class="col-md-2 col-md-offset-8">
				<button class="boton btn-info btn-block" type="submit" value="recuperar">Recuperar</button>
			</div>	  
		</div>
	<br>
	</form>
	
	<div class="panel-footer">
		<h5>� Copyright 2017 IntraVita. Todos los derechos reservados.</h5>
	</div>
	
</body>
</html>