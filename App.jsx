import React from 'react';
import './App.css';

import { Header } from "./components/header/Header.jsx";
import { Content } from "./components/content/Content.jsx";

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

export default App;
