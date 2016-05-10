import React, {Component} from 'react';

export default class ResolutionSingle extends Component {
    render() {
        return (
            <li className="item">
                {this.props.resolution.text}
                {this.props.resolution.complete}
            </li>
        )
    }
}