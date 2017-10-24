import React from 'react';
import './App.css';

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

function Header() {
	return (
		<div className='header'>
			<div className='title'>Another boring <span className='hello'>Hello World!</span> app!</div>
		</div>		
	);
}


function Content() {
	return (
		<div className='container'>
			<div className='message'>Start playing with <span className='file'>./Apps.jsx</span> file</div>
		</div>
	);
}

export default App;