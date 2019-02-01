import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/App/App';
import Page from './components/page2/page2'






// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <nav className="navbar">
        <ul className="navbar-list clearfix">
            <li className="navbar-item"><Link className="navbar-link" to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to={`${process.env.PUBLIC_URL}/page`}>Page</Link></li>
        </ul>
    </nav>
);



const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={App}/>
            <Route exact path={`${process.env.PUBLIC_URL}/page`} component={Page}/>
        </Switch>
    </main>
)

const Nav = () => (
    <div className="">
        <Header/>
        <Main/>
    </div>
)

ReactDOM.render((
    <BrowserRouter basename={'/'}>
        <Nav/>
    </BrowserRouter>
), document.getElementById('root'))
serviceWorker.unregister();
