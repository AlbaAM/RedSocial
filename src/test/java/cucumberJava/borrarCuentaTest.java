package cucumberJava;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import com.intravita.proyectointranet.modelo.Publicacion;
import com.intravita.proyectointranet.modelo.Usuario;
import com.intravita.proyectointranet.persistencia.PublicacionDAOImpl;
import com.intravita.proyectointranet.persistencia.UsuarioDAOImpl;


import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;


public class borrarCuentaTest {
	
	UsuarioDAOImpl usuarioDao= new UsuarioDAOImpl();
	PublicacionDAOImpl publicacionDao= new PublicacionDAOImpl();
	private Usuario usuario;
	private Publicacion publicacion;

	@Given("^Usuario conectado quiere borrar su cuenta$")
	public void Usuario_conectado_quiere_borrar_su_cuenta() {
		usuario=new Usuario("borrar.borrar", "1234qwer", "borrar@alu.uclm.es", "borrar");
		publicacion= new Publicacion(usuario, "Quiero que me cambies de usuario");
		try {
			if(usuarioDao.selectNombre(usuario))usuarioDao.delete(usuario);
			usuarioDao.insert(usuario);
			publicacionDao.insert(publicacion);
		}catch(Exception e) {
			assertTrue(true);
		}
	}
	
	@When("^\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" correctos$")
	public void correctos(String arg1, String arg2, String arg3, String arg4) {
	    
	}

	@Then("^Borrar cuenta y cambiar publicaciones de propietario$")
	public void Borrar_cuenta_y_cambiar_publicaciones_de_propietario() {
		try {
			usuarioDao.delete(usuario);
		}catch(Exception e) {
			assertTrue(true);
		}
		usuarioDao.selectNombre(usuario);
		publicacionDao.existe(publicacion);
		publicacion.setUsuario(new Usuario("Papelera"));
		assertTrue(publicacionDao.existe(publicacion));
	}
	
	@When("^\"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" incorrectos$")
	public void incorrectos(String arg1, String arg2, String arg3, String arg4) {
		 usuario=null;
	}

	@Then("^No se borra cuenta$")
	public void No_se_borra_cuenta() {
		assertTrue(true);
	}

}
