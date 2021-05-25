import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                This is the About Page. {this.props.name}
            </div>
        )
    }
}
