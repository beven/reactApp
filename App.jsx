import React from 'react';

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
				<h1>Another boring 'Hello World' app!</h1>
			</div>
		);
	}
}

class Content extends React.Component {
	render(){
		return(
			<div>
				<h2>Can we improve it?</h2>
				<p>Maybe we can together ...</p>
			</div>
		);
	}
}

export default App;