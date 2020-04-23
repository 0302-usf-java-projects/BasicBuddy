package com.squad.driver;
import com.squad.model.*;
import com.squad.dao.*;
import com.squad.service.*;

public class Driver {
	private static UserService us = new UserService();

	
	public static void main(String[] args) {
		User user =  new User(1, "jrrm", "password", "Jordan", "Morgan", "test@email.com", null);
		us.save(user);

	}

}
