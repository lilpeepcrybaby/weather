import _ from 'lodash';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import "bootstrap";
import { Main } from './Main';
import { Login } from './Login';
export class Entry extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <div className="entry">
                <Router>
                    <div>
                        <Route exact path="/" component={Login}/>
                        <Route path="/weather" component={Main}/>
                    </div>
                </Router>
            </div>
        )
    }
}