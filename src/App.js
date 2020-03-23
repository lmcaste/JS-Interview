import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

// import { decorate, observable, action, computed } from 'mobx';

// decorate(Store, {
// 	reviewList: observable,
// 	addReview: action,
// 	getRepos: action,
// 	averageScore: computed,
// 	reviewCount: computed
// });

class App extends Component {
	render() {
		const App = () => (
			<div>
				<div className="container">
					{/* <Form store={reviewStore} />
					<Dashboard store={reviewStore} />
					<Reviews store={reviewStore} /> */}
					<svg className="spinner" viewBox="0 0 50 50">
						<circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
					</svg>
				</div>
				{/* <Switch store={reviewStore}>
					<Route exact path="/" component={Home} store={reviewStore}/>
					<Route path="/list" component={UserList} store={reviewStore}/>
				</Switch> */}
			</div>
		);
		return (
			// <Switch>
			<div>
			<svg className="spinner" viewBox="0 0 50 50">
						<circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
					</svg>
				<App className="App"/>
				</div>
			// </Switch>
		);
	}
}

export default App;
