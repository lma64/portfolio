import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
	return (
		<div className='page-container'>
			<div className='content-wrap'> 
				<Router>
					<Switch>
						<Route exact path="/">
							<Redirect to = "/login"/>
						</Route>
						<Route exact path="/login">
							<Login/>
						</Route>
						<Route exact path="/GenshinImpact">
							<Home/>
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	)
}

export default App;