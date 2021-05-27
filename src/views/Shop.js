import React, { Component } from 'react'
import Product from '../components/Product';

export default class Shop extends Component {
    constructor(){
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:5000/api/products')
            .then(res => res.json())
            .then(data => this.setState({ products: data}))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="row">
                {this.state.products.map(p => <Product key={p.id} product={p} addToCart={this.props.addToCart}/>)}
            </div>
        )
    }
}
