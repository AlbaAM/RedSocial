package cucumberJava;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import com.intravita.proyectointranet.modelo.Administrador;
import com.intravita.proyectointranet.modelo.Usuario;
import com.intravita.proyectointranet.persistencia.AdministradorDAOImpl;
import com.intravita.proyectointranet.persistencia.UsuarioDAOImpl;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class loginTest {
	private Usuario usuario;
	private Administrador administrador;
	
	UsuarioDAOImpl usuarioDao= new UsuarioDAOImpl();
	AdministradorDAOImpl administradorDao= new AdministradorDAOImpl();
	
	@Given("^Usuario en pagina de login$")
	public void Usuario_en_pagina_de_login() {
		usuario=new Usuario();
		administrador=new Administrador();
	}

	
	@When("^\"([^\"]*)\" y \"([^\"]*)\" correctas$")
	public void y_correctas(String nombre, String pwd) {
		System.out.println(nombre + pwd);
		usuario.setNombre(nombre);
		usuario.setClave(pwd);
		
		administrador.setNombre(nombre);
		administrador.setClave(pwd);
	}

	@Then("^Mensaje de bienvenida al login$")
	public void Mensaje_de_bienvenida_al_login() {
		assertTrue(usuarioDao.login(usuario) || administradorDao.login(administrador));
	}

	
	@When("^\"([^\"]*)\" incorrecto y \"([^\"]*)\" correcta$")
	public void incorrecto_y_correcta(String nombre, String pwd) {
		System.out.println(nombre + pwd);
		usuario.setNombre(nombre);
		usuario.setClave(pwd);
		
		administrador.setNombre(nombre);
		administrador.setClave(pwd);
	}

	@When("^\"([^\"]*)\" incorrecta y \"([^\"]*)\" correcto$")
	public void incorrecta_y_correcto(String nombre, String pwd) {
		System.out.println(nombre + pwd);
		usuario.setNombre(nombre);
		usuario.setClave(pwd);
		
		administrador.setNombre(nombre);
		administrador.setClave(pwd);
	}

	
	@Then("^Mensaje de error al login$")
	public void Mensaje_de_error_al_login() {
		assertFalse(usuarioDao.login(usuario) && administradorDao.login(administrador));
	}


}
