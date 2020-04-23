package com.squad.dao;
import com.squad.model.*;


import java.util.*;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
@Transactional
public class UserDao implements DaoContract<User, Integer> {
	private SessionFactory sesfact;

	
	@Autowired
	public UserDao(SessionFactory sesfact) {
		super();
		this.sesfact = sesfact;
	}

	@Override
	public List<User> findAll() {
	return sesfact.openSession().createQuery("from User", User.class).list();

	}

	@Override
	public User findById(Integer id) {
		return sesfact.openSession().get(User.class, id);

	}

	@Override
	public void save(User t) {
		sesfact.openSession().save(t);
		
	}

	@Override
	public void update(User t) {
		sesfact.openSession().update(t);

		
	}

	@Override
	public void deleteById(Integer id) {
		sesfact.openSession().remove(this.findById(id));

		
	}

	@Override
	public void delete(User t) {
		sesfact.openSession().delete(t);

		
	}

}
