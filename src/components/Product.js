import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    render() {
        const p = this.props.product
        return (
            <div className="col-md-4">
                <div className="card">
                    <img src={p.image} className="img-fluid" alt={p.name} />
                    <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                
                        <button onClick={() => this.props.addToCart(p)} className="btn btn-primary">Add To Cart</button>
                        <Link to={`/shop/${p.id}`}>
                            <button className="btn btn-secondary float-end">More Info</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
