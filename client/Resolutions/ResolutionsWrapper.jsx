import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

    resolutions() {
        return Resolutions.find().fetch();
    }


    render() {
        let res = this.resolutions();

        if (res.length <= 0) {

            return (<div>Loading Please Wait!!...</div>)

        }


        return (

                    <div className="card">
                        <ResolutionsForm />
                        <div className="ui stackable three column grid">
                            <div className="column"></div>

                            <div className="column">
                            <ul>
                                <ResolutionSingle resolution={res[0]}/>
                                <br/>
                                <br/>
                                <h1 id="construction" className="ui header">Website Under Construction</h1>
                            </ul>
                            </div>

                            <div className="column"></div>
                        </div>

                    </div>


        )
    }
}


