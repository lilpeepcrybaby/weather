import _ from 'lodash';
import React from 'react';
import "bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
export class Login extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <div className="login col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <Link
                    to={{
                        pathname: '/weather'
                    }}>
                    <img className="entry-img" src="./img/Entry.png"></img>
                </Link>
            </div>
        )
    }
}