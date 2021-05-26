import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostDetail extends Component {
    constructor(){
        super();

        this.state = {
            post: {}
        }
    }

    componentDidMount(){
        let postId = this.props.match.params.id;
        fetch(`http://localhost:5000/api/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    post: data
                })
            })
    }

    render() {
        const post = this.state.post
        return (
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <Link to={`/update/${post.id}`}><button className='btn btn-primary m-3'>Update</button></Link>
                <button className='btn btn-danger m-3'>Delete</button>
            </div>
        )
    }
}
