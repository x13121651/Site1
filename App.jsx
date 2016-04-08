import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

    resolutions() {
        return Resolutions.find().fetch();
    }


    render() {
        var res = this.resolutions();
        console.log(this.resolutions());
        if (res.length < 1) {
            return (<div>Loading</div>)
        }

        return (
            <div>
                <h1>My Resolutions</h1>
                <ResolutionsForm />
                <div>
                    <ul>
                        <ResolutionSingle resolution={res[0]}/>
                    </ul>

                </div>
            </div>
        )
    }
}

