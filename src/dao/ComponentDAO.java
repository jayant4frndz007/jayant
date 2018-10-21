package dao;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import bean.Bean;
import utility.DBUtility;



public class ComponentDAO {

	Connection con=DBUtility.getDBConnection();
	ResultSet rs=null;
	Bean bean=new Bean();
	public JSONArray getDaoComponent(String panel,String screen) throws ParseException{
		
		ArrayList<String> list=new ArrayList<String>();
		JSONArray li=new JSONArray();
		JSONParser parser = new JSONParser();
//		JsonObject ob=new JsonObject();
		String str="";
		try {
			PreparedStatement ps=con.prepareStatement("select * from component where panel=? && screen=?");
			ps.setString(1, panel);
			ps.setString(2, screen);
			rs=ps.executeQuery();
			System.out.println(rs);
			while(rs.next()) {
			JSONObject ob=new JSONObject();
			ob.put("label", rs.getString("label_name"));
			ob.put("type", rs.getString("type"));
			ob.put("design", rs.getString("design"));
			li.add(ob);
			}
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return li;
	}
	
public JSONArray getDaoSubComponent(String subComp) throws ParseException{
		
		ArrayList<String> list=new ArrayList<String>();
		JSONArray li1=new JSONArray();
		JSONParser parser = new JSONParser();
System.out.println("subComponent");
		try {
			PreparedStatement ps=con.prepareStatement("select * from subcomponent where label_name=?");
			ps.setString(1, subComp);
			
			rs=ps.executeQuery();
			
			while(rs.next()) {
			JSONObject ob=new JSONObject();
			ob.put("label", rs.getString("sublink"));
			ob.put("type", rs.getString("type"));
			
			li1.add(ob);
			}
			
			System.out.println(li1);	
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return li1;
	}
}
