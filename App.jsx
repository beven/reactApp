import React from 'react';

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
				<h1 className="headerOne">Just Another boring 'Hello World' app!</h1>
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