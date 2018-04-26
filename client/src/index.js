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
					hello
				</div>
			);
	}
}

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);