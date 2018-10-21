import React from 'react';
import $ from 'min-jquery';



export function Utils(urls,datas){
  
	console.log("calling"+ urls);
	var answer;
	$.ajax({
	      url: urls,
	      type:'POST',
	      data:datas,
	      success: (data)=> {
	    	  console.log(data);
	    	return data;
	      },
	      error: (err)=> {
	    	  console.log(err);
	       console.log(err);
	    	 return err;
	      }
	     
	    })
	
	   
};
  