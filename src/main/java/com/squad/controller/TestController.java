package com.squad.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
@EnableWebMvc
@Controller
public class TestController {
	
	@RequestMapping( value = "/.fire", method = RequestMethod.GET)
	public ResponseEntity<String> sendSimple() {
		return new ResponseEntity<String>("<h1>this<h1>", HttpStatus.ACCEPTED);
	}
}


//@Autowired
//private GlueService gs;
//@RequestMapping(method = RequestMethod.GET, value = "/all.app")
//public ResponseEntity<List<Glue>> findAll(){
//  return new ResponseEntity<List<Glue>>(gs.getAll(), HttpStatus.OK);
//}
//@RequestMapping(method = RequestMethod.POST, value = "/glue.app")
//public ResponseEntity<Glue> save(@RequestBody Glue g){
//  return new ResponseEntity<Glue>(gs.save(g), HttpStatus.OK);
//}
//@RequestMapping(method = RequestMethod.GET, value = "/getGlue.app")
//public ResponseEntity<Glue> findById(@RequestParam("id") Integer id){
//  return new ResponseEntity<Glue>(gs.findById(id), HttpStatus.OK);
//}
//@RequestMapping(method = RequestMethod.GET, value = "/deleteGlue.app/{id}")
//public void deleteById(@PathVariable Integer id){
//      gs.deleteById(id);
//}
//@RequestMapping(method = RequestMethod.PUT, value = "/updateGlue.app/{id}")
//public void update(@PathVariable Integer id){
//      gs.update(gs.findById(id));
//}