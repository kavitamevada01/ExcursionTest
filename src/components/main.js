import React, { Component } from 'react';
import DestinationListing from './destinationListing'
import ExcursionsListing from './excursionsListing'
import { Switch, Route } from 'react-router-dom'


class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={DestinationListing}/>
                    <Route path='/excursions/:selectedCountry/:selectedDestination' component={ExcursionsListing}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
