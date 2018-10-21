import React, { Component } from 'react';
import $ from 'min-jquery';
import logo from './logo.svg';
import './App.css';
import {Utils} from './utils';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
				ans:undefined,
				arr:[],
				subcomp:undefined,
				subComponent:undefined,
				arrrr:[],
		}
		
	}
	componentWillMount(){
		//var a={jay:'jayant'};
		$.ajax({
		      url: 'http://localhost:8888/Access/Component1',
		      type:'POST',
		      data:{jay:'jayant'},
		      success: (data)=> {
		    	 var c={data};
		    	
		    	  this.setState({arr:data});
		    	  this.search();
		       
		      },
		      error: (data)=> {
		    	//  console.log(data);
		       // console.log(data);
		      }
		     
		    });
		
		
			
	  }
	search=()=>{
		var ar=JSON.parse(this.state.arr);
		console.log(ar.length);
		var promise=ar;
		var str='';
		var res=[];
		for(var i=0;i<ar.length;i++){
			console.log(promise[i].label);
			if(promise[i].type=='link'){
				res.push(<div key={promise[i].label}>
				 <ul id="menu-content" className="menu-content collapse out">
			                <li onClick={this.calFun.bind(this,promise[i].label)}>
			                  <a href="#" >
			                  <i className={promise[i].design}></i> {promise[i].label}
			                  </a>
			                </li>
			                </ul>
			          
					</div>);
			}else if(promise[i].type=='sublink'){
				var aa=this.cal(promise[i].label);
				
				res.push(<div key={promise[i].label} style={{backgroundColor:'gray'}}>
				 <li  data-toggle="collapse" data-target="#products" className="collapsed active"  >
                 <div>&nbsp;&nbsp;{promise[i].label}</div>
               </li>
              
               </div>);
			}
			
		};
		console.log(res);
		this.setState({ans:res});;
}
	cal=(a)=>{
		console.log(a);
		var aaa='';
		$.ajax({
		      url: 'http://localhost:8888/Access/SubComponent1',
		      type:'POST',
		      data:{subComp:a},
		      success: (data)=> {
		    	 
		    	console.log(data);
		    	   this.setState({subcomp:data});
		    	  aaa=this.subCompon();
		    	
		    	  console.log(aaa);
		       
		      },
		      error: (data)=> {
		    	
		      }
		     
		    });
		 this.setState({subComponent:aaa});
		return this.state.subComponent;
	}
	
	subCompon=()=>{
		var subarr=JSON.parse(this.state.subcomp);
		var sarr=[];
		
		for(var i=0;i<subarr.length;i++){
			sarr.push( <ul >
               <li key={subarr[i].label} style={{marginLeft:'10%'}} onClick={this.calFun.bind(this,subarr[i].label)}><a href="#" >{subarr[i].label}</a></li>
           </ul>
           );
		}
		
		 this.setState({subComponent:sarr});
		 return this.state.subComponent;
	}
	calFun=(aa)=>{
		alert(aa);
	}
  render() {
	  
    return (<div className="App" >
				    <div className="nav-side-menu">
				    <div className="brand">Access Control System</div>
				    <div className="menu-list">
				        
				        			{this.state.ans}
				        			{this.state.subComponent}
				    
				      </div>
				    </div>
				  </div>
				  );
  }
}

export default App;
