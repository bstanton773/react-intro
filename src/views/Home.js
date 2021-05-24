import React, { Component } from 'react'
import DriverInfo from '../components/DriverInfo'

export default class Home extends Component {

    render() {
        const racers = this.props.racers
        return (
            <div>
                Hello, {this.props.kevinName}, this is the Home Page 
                <button className='btn btn-primary' onClick={this.props.updateName}>Update Name</button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Postition</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Nationality</th>
                            <th>Constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {racers.map((racer, index) => (<DriverInfo racer={racer} index={index} />))}
                    </tbody>
                </table>
            </div>
        )
    }
}
