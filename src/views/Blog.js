import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
                <Link to='/createpost'><button className='btn btn-primary'>Create Post</button></Link>
                {this.state.posts.map((post, index) => <Post post={post} key={index}/>)}

            </div>
        )
    }
}
