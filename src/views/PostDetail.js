import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class PostDetail extends Component {
    constructor(){
        super();

        this.state = {
            post: {},
            redirect: null
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

    deletePost = () => {
        let post = this.state.post
        fetch(`http://localhost:5000/api/posts/${post.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                redirect: '/blog'
            })
        })
    }

    render() {
        const post = this.state.post
        if (this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <Link to={`/update/${post.id}`}><button className='btn btn-primary m-3'>Update</button></Link>
                <button className='btn btn-danger m-3' data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>

                {/* Modal */}
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Are You Sure?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Are you sure you want to delete this post? This action cannot be undone.
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button className="btn btn-danger" onClick={this.deletePost} data-bs-dismiss="modal">Confirm Delete</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
