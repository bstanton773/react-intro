import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductDetail extends Component {
    constructor(){
        super();

        this.state = {
            product: {}
        }
    }

    componentDidMount(){
        fetch(`http://localhost:5000/api/products/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({ product:data }))
            .catch(error => console.error(error))
    }

    render() {
        const p = this.state.product
        return (
            <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">
                       {p.name}
                    </h3>
                    <small>${p.price}</small>
                    <img className="card-img-top img-fluid" src={p.image} alt="name"/>
                    <p className="card-text">{p.description}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={() => this.props.addToCart(p)}>Add to Cart</button>
                    <Link to="/shop">
                        <button className="btn btn-secondary float-end">Back to Shop</button>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}
