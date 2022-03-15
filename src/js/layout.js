import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo, Register } from "./views/register";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { SignIn } from "./views/signin";
import { RecipeBrowser } from "./views/recipeBrowser";
import { RandomDrink } from "./views/randomDrink";
import { FullCards } from "./views/fullCards";
import { Information } from "./views/information";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/signin">
							<SignIn />
						</Route>
						<Route exact path="/recipeBrowser">
							<RecipeBrowser  />
						</Route>
						<Route exact path="/randomDrink">
							<RandomDrink  />
						</Route>
						<Route exact path="/information/:name" component={Information}/>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
