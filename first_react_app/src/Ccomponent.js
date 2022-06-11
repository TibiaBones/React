import React, { Component } from 'react'
import Menu from './Menu';

export default class Ccomponent extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Menu/>
                    Class Component {this.props.name}
                </h1>
            </div>
        )
    }
}

Ccomponent.defaultProps = { name: "Vadim"}