import React from 'react';
import './App.css';

document.body.style.backgroundColor = "steelblue";
class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Content/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return(
			<div>
				<h1 className="headerOne" style={{ color: '#27ae60', font: '70px Tahoma, Helvetica, Arial, Sans-Serif', textShadow: '0px 2px 3px rgb(114, 220, 159)' }}>Another boring '
					<span class="amber">H</span>
					<span class="pink">e</span>
					<span class="yellow">l</span>
					<span class="blue">l</span>
					<span class="green">o</span>
					<span class=""> </span>
					<span class="lime">W</span>
					<span class="grey">o</span>
					<span class="deepOrange">r</span>
					<span class="pink">l</span>
					<span class="amber">d</span>
					<span class="deepOrange">!</span>


					' app!</h1>
			</div>
		);
	}
}

class Content extends React.Component {
	render(){
		return(
			<div id="initialDiv">
				<h2 className="headerTwo">Can we improve it?</h2>
				<p>Maybe we can together ...</p>
			</div>
		);
	}
}

export default App;
