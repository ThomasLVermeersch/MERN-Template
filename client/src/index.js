import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Navbar extends React.Component {
	render(){
		return(
			<nav class="uk-navbar uk-margin" uk-navbar>
				<div><a id="site-logo">SiteName</a></div>
			        <div class="uk-navbar-right">
				        <ul class="uk-navbar-nav">
				            <li class="uk-active"><a href="#">Active</a></li>
				            <li>
				                <a href="#">Parent</a>
				                <div class="uk-navbar-dropdown">
				                    <ul class="uk-nav uk-navbar-dropdown-nav">
				                        <li class="uk-active"><a href="#">Active</a></li>
				                        <li><a href="#">Item</a></li>
				                        <li><a href="#">Item</a></li>
				                    </ul>
				                </div>
				            </li>
				            <li><a href="#">Item</a></li>
				        </ul>
				    </div>
			</nav>
		);
	}
}

ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
);