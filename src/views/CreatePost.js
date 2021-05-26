import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class CreatePost extends Component {
    constructor(){
        super();

        this.state = {
            redirect: null
        }
    }

    createPost = (e) =>{
        e.preventDefault();
        let postTitle = e.target.title.value;
        let postBody = e.target.body.value;
        console.log(postTitle, postBody);
        fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "title": postTitle,
                "body": postBody
            })
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    redirect: `/blog/${data.id}`
                }
            )
            }).catch(error => console.log(error))
    }
    render() {
        if (this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <form onSubmit={(e) => this.createPost(e)}>
                    <input type="text" className='form-control mt-3' name='title' placeholder='Title' />
                    <input type='text' className='form-control mt-3' name='body' placeholder='Body' />
                    <button type='submit' className='btn btn-outline-info mt-3'>Submit</button> 
                </form>
            </div>
        )
    }
}
