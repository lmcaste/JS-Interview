import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';

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
				</div>
				{/* <Switch store={reviewStore}>
					<Route exact path="/" component={Home} store={reviewStore}/>
					<Route path="/list" component={UserList} store={reviewStore}/>
				</Switch> */}
			</div>
		);
		return (
			// <Switch>
				<App className="App"/>
			// </Switch>
		);
	}
}

export default App;
