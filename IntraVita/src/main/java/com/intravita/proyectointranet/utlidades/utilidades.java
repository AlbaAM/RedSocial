package com.intravita.proyectointranet.utlidades;

import java.util.ArrayList;
import java.util.Iterator;

import com.intravita.proyectointranet.modelo.Publicacion;

public class utilidades {
	public static String extensionEmail="@alu.uclm.es";
	/**
	 * @method comprobacion de credenciales validas para el registro
	 * @param nombre
	 * @param email
	 * @param pwd1
	 * @param pwd2
	 * @return 
	 * @throws Exception 
	 */
	static //Vector con las "malasPalabras" que el sistema reconocer�
	 String [] diccionario = {"cabron", "cabronazo", "maricon", "gilipollas", "tonto", "capullo", "idiota", "fuck", "fucking", "huevon", "polla", "pollon", "co�o"};
	 
	 public static void credencialesValidas(String nombre, String email, String pwd1, String pwd2) throws Exception {
	  if(nombre.equals("") ||email.equals("")|| pwd1.equals("")|| pwd2.equals(""))
	   throw new Exception ("Por favor rellene todos los campos");
	  comprobacionNombre(nombre);

	  if(email.length()<=extensionEmail.length())
	   throw new Exception("Email invalido");
	  String extension=email.substring(email.length()-extensionEmail.length(), email.length());
	  palabrasMalas(email, diccionario);
	  
	  if(!extension.equals(extensionEmail))
	   throw new Exception("Email invalido");
	  
	  if(!pwd1.equals(pwd2))
	   throw new Exception("No coinciden las password");
	  seguridadPassword(pwd1);
	  
	 }
	 public static void comprobacionNombre(String nombre) throws Exception{
	  if(!nombre.contains("."))
	   throw new Exception("Formato nombre invalido"); 
	  int posicion=nombre.indexOf('.');
	  int posicion2=nombre.lastIndexOf('.');
	  if(posicion!=posicion2)
	   throw new Exception("Formato nombre invalido");
	  palabrasMalas(nombre, diccionario);
	 }
	 
	 public static void palabrasMalas(String nombre, String [] diccionario)throws Exception{
	  for(int i=0;i<diccionario.length;i++) {
	   if(nombre.contains(diccionario[i]))
	    throw new Exception("Formato del nombre y/o email invalido, contiene palabras malsonantes");
	  }
	 }
	
	public static void seguridadPassword(String pwd) throws Exception{
		if(pwd.length()<8)
			throw new Exception("Password poco segura (minimo 8 caracteres, con numeros y letras)");
		boolean caracter=false;
		boolean numero=false;
		char c;
		for(int i=0; i<pwd.length(); i++) {
			c=pwd.charAt(i);
			if(!numero) {
				numero=Character.isDigit(c);
			}
			if(!caracter) {
				caracter=Character.isLetter(c);
			}
		}
		if(!caracter || !numero)
			throw new Exception("Password poco segura (minimo 8 caracteres, con numeros y letras)");
	}
	
	public static void publicacionValida(String nombre, String texto) throws Exception {
		if(nombre.equals("") ||texto.equals(""))
			throw new Exception ("Por favor rellene texto para guardar la publicaci�n");
		
	}
	
	public static ArrayList<Publicacion> mostrarPublicaciones(ArrayList <Publicacion> publicas, ArrayList<Publicacion> privadas){
		ArrayList<Publicacion> retorno=new ArrayList<Publicacion>();
		Iterator <Publicacion> itPublicas=publicas.iterator();
		Iterator <Publicacion> itPrivadas=privadas.iterator();
		Publicacion publica=null,privada=null;
		if(itPublicas.hasNext())
			publica=itPublicas.next();
		if(itPrivadas.hasNext())
			privada=itPrivadas.next();

		while(itPublicas.hasNext() && itPrivadas.hasNext()) {
			if(publica.getFecha()>privada.getFecha()) {
				retorno.add(publica);
				publica=itPublicas.next();
			}
			else {
				retorno.add(privada);
				privada=itPrivadas.next();
			}
		}
		if(itPrivadas.hasNext()) {
			while(itPrivadas.hasNext()) {
				retorno.add(privada);
				privada=itPrivadas.next();
			}
			retorno.add(privada);
		}else {
			while(itPublicas.hasNext()) {
				retorno.add(publica);
				publica=itPublicas.next();
			}
			retorno.add(publica);
		}
		return retorno;
	}
	
}
