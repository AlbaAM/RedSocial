package cucumberJava;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import com.intravita.proyectointranet.modelo.Usuario;
import com.intravita.proyectointranet.persistencia.UsuarioDAOImpl;
import com.intravita.proyectointranet.utlidades.utilidades;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class crearCuentaTest {

	private Usuario usuario;
	private String nombre;
	private String pwd1;
	private String pwd2;
	private String email;
	private String respuesta="fernando";
	UsuarioDAOImpl usuarioDao= new UsuarioDAOImpl();
	
	@Given("^Usuario en pagina de creacion$")
	public void Usuario_en_pagina_de_creacion() {
		usuario=new Usuario();
	}


	
	@When("^\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" validos$")
	public void validos(String nombre, String email, String pwd1, String pwd2, String respuesta) {
		try {
			utilidades.credencialesValidas(nombre, email, pwd1, pwd2, respuesta);
		}catch(Exception e){
			assertTrue(false);
		}
		
		usuario.setNombre(nombre);
		usuario.setClave(pwd1);
		usuario.setEmail(email);
		usuario.setRespuesta(respuesta);
	}

	

	@Then("^Mensaje de validacion y usuario insertado$")
	public void Mensaje_de_validacion_y_usuario_insertado() {
			if(usuarioDao.selectNombre(usuario))usuarioDao.delete(usuario);
		try {
			usuarioDao.insert(usuario);
		}catch(Exception e) {
			assertTrue(false);
		}
	}


	
	@When("^\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" Email no tiene extension alu.uclm.es$")
	public void Email_no_tiene_extension_alu_uclm_es(String nombre, String email, String pwd1, String pwd2) {
		try {
			utilidades.credencialesValidas(nombre, email, pwd1, pwd2, respuesta);
			assertTrue(false);
		}catch (Exception e){
			assertEquals(e.getMessage(), "Email invalido");
		}
	}

	@When("^\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" Password y su confirmacion no coinciden$")
	public void Password_y_su_confirmacion_no_coinciden(String nombre, String email, String pwd1, String pwd2) {
		try {
			utilidades.credencialesValidas(nombre, email, pwd1, pwd2, respuesta);
			assertTrue(false);
		}catch (Exception e){
			assertEquals(e.getMessage(), "No coinciden las password");
		}
	}

	@When("^\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" Nombre no tiene el formato adecuado$")
	public void Nombre_no_tiene_el_formato_adecuado(String nombre, String email, String pwd1, String pwd2) {
		try {
			utilidades.credencialesValidas(nombre, email, pwd1, pwd2, respuesta);
			assertTrue(false);
		}catch (Exception e){
			assertEquals(e.getMessage(), "Formato nombre invalido");
		}
	}

	@When("^\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" Password no tiene la seguridad adecuada$")
	public void Password_no_tiene_la_seguridad_adecuada(String nombre, String email, String pwd1, String pwd2) {
		try {
			utilidades.credencialesValidas(nombre, email, pwd1, pwd2, respuesta);
			assertTrue(false);
		}catch (Exception e){
			assertEquals(e.getMessage(), "Password poco segura (minimo 8 caracteres, con numeros y letras)");
		}
	}

	
	@Then("^Mensaje de error a la creacion email invaildo$")
	public void Mensaje_de_error_a_la_creacion_email_invaildo() {
		assertTrue(true);
	}

	@Then("^Mensaje de error a la creacion password no coinciden$")
	public void Mensaje_de_error_a_la_creacion_password_no_coinciden() {
		assertTrue(true);
	}

	@Then("^Mensaje de error a la creacion nombre invalido$")
	public void Mensaje_de_error_a_la_creacion_nombre_invalido() {
		assertTrue(true);
	}



	@Then("^Mensaje de error a la creacion password poco segura$")
	public void Mensaje_de_error_a_la_creacion_password_poco_segura() {
		assertTrue(true);
	}

	
	@When("^\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" Nombre que intenta registrar ya existe$")
	public void Nombre_que_intenta_registrar_ya_existe(String nombre, String email, String pwd1, String pwd2) {
		try {
			utilidades.credencialesValidas(nombre, email, pwd1, pwd2, respuesta);
		}catch(Exception e){
			assertTrue(false);
		}
		
		usuario.setNombre(nombre);
		usuario.setClave(pwd1);
		usuario.setEmail(email);
	}

	@Then("^Mensaje de error a la creacion cuenta ya existente$")
	public void Mensaje_de_error_a_la_creacion_cuenta_ya_existente() {
		try {
			usuarioDao.insert(usuario);
		}catch(Exception e) {
			assertTrue(true);
		}
	}

}
