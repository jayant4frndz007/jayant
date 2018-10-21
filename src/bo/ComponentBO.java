package bo;

import java.util.ArrayList;

import org.json.JSONException;
import org.json.simple.JSONArray;
import org.json.simple.parser.ParseException;

import com.google.gson.JsonArray;

import bean.Bean;
import dao.ComponentDAO;

public class ComponentBO {
	JSONArray li = new JSONArray();
	ComponentDAO dao=new ComponentDAO();
   public JSONArray getComponent(String panel,String screen) throws ParseException{
	   li=dao.getDaoComponent(panel, screen);
	   return li;
   }
   
   
   public JSONArray getSubComponent(String subComp) throws ParseException{
	   li=dao.getDaoSubComponent(subComp);
	   return li;
   }
   
}
