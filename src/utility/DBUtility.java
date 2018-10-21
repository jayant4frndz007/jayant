package utility;


import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtility {
	public static Connection getDBConnection()
	{
		Connection conn=null;

		try {
			Class.forName("com.mysql.jdbc.Driver");

			conn = DriverManager.getConnection("jdbc:mysql://localhost/access_control_system", "root", "");
			System.out.print("Database is connected !");
			
		} catch (Exception e) {
			System.out.print("Do not connect to DB - Error:" + e);
		}

		return conn;
	}

}
