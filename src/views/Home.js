import React, { Component } from 'react'
import DriverInfo from '../components/DriverInfo'

export default class Home extends Component {
    constructor(){
        super();

        this.state = {
            name: 'Brian'
        }
    }

    render() {
        const racers = this.props.racers
        return (
            <div>
                <form onSubmit={(e) => this.props.handleSubmit(e)}>
                    <div className='row'>
                        <div className="mb-3 col-6">
                            <label htmlFor="yearInput" className="form-label">Year</label>
                            <input type="text" className="form-control" id="yearInput" placeholder='Year' />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="roundInput" className="form-label">Round</label>
                            <input type="text" className="form-control" id="roundInput" placeholder='Round' />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {racers.length > 0 ? ( <table className='table table-striped'>
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
                        {racers.map((racer, index) => (<React.Fragment key={index}><DriverInfo racer={racer}/></React.Fragment>))}
                    </tbody>
                </table>) : (<div></div>)}
               
            </div>
        )
    }
}
