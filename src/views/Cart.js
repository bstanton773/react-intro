import React, { Component } from 'react'

export default class Cart extends Component {
    getQuantity = (cartItem, cartList) =>{
        let count = 0;
        for (let i=0; i < cartList.length; i++){
            if (JSON.stringify(cartItem) === JSON.stringify(cartList[i])){
                count++;
            }
        }
        return count
    }

    render() {
        const uniqueCartSet = new Set(this.props.cart)
        const uniqueCart = [...uniqueCartSet]
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uniqueCart.map((prod, idx)=> (
                            <tr key={idx}>
                                <td>{prod.id}</td>
                                <td>{prod.name}</td>
                                <td>{this.getQuantity(prod, this.props.cart)}</td>
                                <td>${prod.price}</td>
                                <td>${(prod.price * this.getQuantity(prod, this.props.cart)).toFixed(2)}</td>
                                <td><button onClick={() => this.props.removeFromCart(prod)} className="btn btn-danger"><i className="fas fa-trash"></i></button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>SUBTOTAL</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>${this.props.sumCartProducts(this.props.cart)}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>TAX</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>${(this.props.sumCartProducts(this.props.cart) * .1025).toFixed(2)}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>TOTAL</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>${(this.props.sumCartProducts(this.props.cart) * 1.1025).toFixed(2)}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
