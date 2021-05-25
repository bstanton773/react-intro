import React, { Component } from 'react'
import Post from '../components/Post';

export default class Blog extends Component {
    constructor(){
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState(
                    {posts: data}
                )
            })
    }

    render() {
        return (
            <div>
                <h1>Kekambas Blog</h1>
                {this.state.posts.map((post, index) => <Post post={post} key={index}/>)}

            </div>
        )
    }
}
