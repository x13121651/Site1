import React, {Component} from 'react';

export default class ResolutionsForm extends Component {

    addResolution(event) {
        event.preventDefault();
        var text = this.refs.Resolution.value.trim();

        Resolutions.insert({
            text: text,
            complete: false,
            createdAt: new Date()
        });
        this.refs.resolutions.value = "";

    }

    render() {
        return (
            <form className='ui form' onsubmit={this.addResolution.bind(this)}>
                <div className="ui three column grid">
                    <div className="column"> </div>
                <div className="field column">
                    <label className="label">Resolution</label>
                    <input type="text" name="Resolution" placeholder="Add Entry"/>
                </div>
                    <div className="column"> </div>

                </div>
            </form>
        )
    }
}