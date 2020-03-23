import React, { Component } from 'react';

class App extends Component {
	render() {
		const App = () => (
			<div>
				<div className="container">
					<svg className="spinner" viewBox="0 0 50 50">
						<circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
					</svg>
				</div>
			</div>
		);
		return (
			<div>
				<App className="App"/>
			</div>
		);
	}
}

export default App;
