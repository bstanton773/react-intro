import React, { Component } from 'react'

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
            </div>
        )
    }
}
