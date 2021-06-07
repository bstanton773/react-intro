import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        if (!this.props.message){
            return null
        }
        return (
            <div className={`alert alert-${this.props.category} alert-dismissible fade show`} role="alert">
                {this.props.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.props.clearMessage}></button>
            </div>
        )
    }
}
