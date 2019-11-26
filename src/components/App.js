import React from 'react';
import '../App.css';
import MainPage from './pages/MainPage';
import PostViewPage from '../containers/pages/PostViewPage';
import 'react-fontawesome';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StartPage from "./pages/StartPage";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/post" component={PostViewPage}>
                </Route>
                <Route path="/login" component={StartPage}>
                </Route>
                <Route path="/mainPage" component={MainPage}>
                </Route>
                <Route component={MainPage}>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
