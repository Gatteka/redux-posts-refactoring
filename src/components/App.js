import React from 'react';
import '../App.css';
import MainPage from './pages/MainPage';
// import PostViewPage from './pages/PostViewPage';
import PostViewPage from '../containers/pages/PostViewPage';
import 'react-fontawesome';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/post">
                  <PostViewPage />
                </Route>
                <Route path="/">
                   <MainPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
