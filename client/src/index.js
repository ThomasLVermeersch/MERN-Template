import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Site extends React.Component{
	render(){

		return(
			<div id="site-wrapper">
				<Navbar />
				<MainDisplay />
			</div>
		);
	}
}

class Navbar extends React.Component {
	render(){
		return(
			<nav class="uk-navbar uk-margin" uk-navbar>
				<div><a id="site-logo">SiteName</a></div>
			        <div class="uk-navbar-right">
				        <ul class="uk-navbar-nav">
				            <li class="uk-active"><a href="#">Login</a></li>
				            <li><a href="#">Signup</a></li>
				        </ul>
				    </div>
			</nav>
		);
	}
}

class MainDisplay extends React.Component{
	render(){
		return(
				<div class="main-display-wrapper">
					<p>Sign In!</p>
					<SignIn />
					<p>Sign Up!</p>
					<SignUp />
				</div>
			);
	}
}

class SignUp extends React.Component{
	render(){
		return(
			<div> 
				<form action="/signup/" method="post">
				  <div>
				    <label>Email  </label>
				    <input name="email" id="email" defaultValue="Email"/>
				  </div>
				  <div>
				    <label>First Name  </label>
				    <input name="fname" id="fname" defaultValue="First Name"/>
				  </div>
				  <div>
				    <label>Last Name  </label>
				    <input name="lname" id="lname" defaultValue="Last Name"/>
				  </div>
				  <div>
				    <label>Password  </label>
				    <input name="password" id="password" defaultValue="Password"/>
				  </div>
				   <div>
				    <label>Password Confirmation</label>
				    <input name="passwordConf" id="passwordConf" defaultValue="Retype Password"/>
				  </div>
				  <div>
				    <input type="submit" value="submit"/>
				  </div>
				</form>
			</div>
		);
	}
}

class SignIn extends React.Component{
	render(){
		return(
			<div>
				<form action="/signin/" method="post">
				<div>
				    <label>Email  </label>
				    <input name="logemail" id="logemail" defaultValue="email"/>
				 </div>
				   <div>
				    <label>Password</label>
				    <input name="logpassword" id="logpassword" defaultValue="Password"/>
				  </div>
				  <div>
				    <input type="submit" value="submit"/>
				</div>
				</form>
			</div>
		);
	}
}

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);