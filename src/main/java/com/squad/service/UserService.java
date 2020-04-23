package com.squad.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

import com.squad.dao.DaoContract;
import com.squad.dao.UserDao;
import com.squad.model.*;

public class UserService {
	private UserDao dao;
	
	@Autowired
	public void setDao(UserDao dao) {
		this.dao = dao;
	}
	
	public List<User> getAll() {
		return dao.findAll();
	}
	
	public void save(User u) {
		dao.save(u);
	}
	
	
}

//private DaoContract<Glue, Integer> gluer;

//@Autowired
//public void setGluer(DaoContract<Glue, Integer> dd) {
//	gluer=dd;
//}
//
//public List<Glue> getAll(){
//	return gluer.findAll();
//}
//
//public Glue save(Glue g) {
//	gluer.save(g);
//	return g;
//}