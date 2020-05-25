import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '.././Login/Login.js';
import Sidebar from '.././Sidebar.js'
import ADD from '.././files/Add.js'
import SEARCH from '.././files/search.js'
import CNT from '.././Cnt.js'

export default class FeatureRoutes extends Component {
    constructor(props) {
        super(props);
        this.flowDesignRoutes = [];
    }

    initializeFlowDesignRoutes() {
        // flowDesignRoutes = require('../routes/FlowDesignRoutes.json');
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path exact="/" component={Login}></Route>
                    <Route path="/dashboard" component={Sidebar} />
                </Switch>
            </div>
        );
    }
}