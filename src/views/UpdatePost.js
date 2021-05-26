import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class UpdatePost extends Component {
    constructor(){
        super();

        this.state = {
            post: {},
            apiCall: false,
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
                    post: data,
                    apiCall: true
                })
            }).catch((error) => {
                console.error(error);
                this.setState({
                    apiCall: true
                })
            })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        console.log(e);
        let postTitle = e.target.title.value;
        let postBody = e.target.body.value;
        console.log(postTitle, postBody);
        fetch(`http://localhost:5000/api/posts/${this.state.post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                'title': postTitle,
                'body': postBody
            })
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    redirect: `/blog/${data.id}`
                })
            })
    }

    render() {
        const post = this.state.post
        if (this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }else if (!this.state.apiCall){
            return (
                <div></div>
            )
        } else if (!post.id){
            return (
                <div>Please choose a real post</div>
            )
        }
        return (
            <div>
                <form onSubmit={(e) => {this.handleUpdate(e)}}>
                    <input type="text" className='form-control mt-3' name='title' defaultValue={post.title ?? 'No post with that ID'} />
                    <input type='text' className='form-control mt-3' name='body' defaultValue={post.body ?? 'No post with that ID'} />
                    <button type='submit' className='btn btn-outline-info mt-3'>Submit</button> 
                </form>

            </div>
        )
    }
}
