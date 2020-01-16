import React, { Component } from 'react'
import '../App.css'
import './Contact.css'

export default class Contact extends Component {

    state = {
        message: {
            name: "",
            email: "",
            content: ""
        },
        messageSuccess: null
    }

    handleChange = property => event => {
        const newMessage = this.state.message
        newMessage[property] = event.target.value
        this.setState({ 
            message: newMessage
        })
    }

    handlePromise = response => {
        console.log(response)
        if (response.status === 'Success'){
            return (
                console.log("Success")
            )
            && this.setState({ messageSuccess: true})
        }
        else {
            return (
                console.log("Failed")
            )
        }
        
    }

    handleSubmit = event => {
        event.preventDefault()
        const { name, email, content } = this.state.message
        fetch('http://localhost:3000/api/mailer/send',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, content })
        }).then(response => response.json())
        .then(this.handlePromise)
    }

    

    render(){
        const sentMessage = this.state.messageSuccess
        return (
            sentMessage === true ?
             <div className="message-sent">MESSAGE SENT</div>
            : <div className="contact-form">
                <h1>CONTACT ME</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your Name" name="name" onChange={this.handleChange('name')}required />
                    <input type="text" placeholder="E-Mail" name="email" onChange={this.handleChange('email')}required/>
                    <input className='message-input' type="text" placeholder="Message" name="content" onChange={this.handleChange('content')}required/>
                    <input className="submit" type="submit" value="SEND"/>
                </form>
            </div>
        )
    }
}
    
