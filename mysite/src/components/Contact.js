import React, { Component } from 'react'
import '../App.css'
import './Contact.css'

export default class Contact extends Component {

    state = {
        message: {
            name: "",
            email: "",
            content: ""
        }
    }

    handleChange = property => event => {
        const newMessage = this.state.message
        newMessage[property] = event.target.value
        this.setState({ 
            message: newMessage
        })
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
        }).then(response => response.json()
        ).then(response => {
            if (response.status === 'success'){
            alert("Message Sent."); 
        }   else if(response.status === 'fail'){
            alert("Message failed to send.")
      }
    })
        event.target.reset()
}

    render(){
        return (
            <div className="contact-form">
                <h1>Contact Me</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your Name" name="name" onChange={this.handleChange('name')}required />
                    <input type="text" placeholder="E-Mail" name="email" onChange={this.handleChange('email')}required/>
                    <input className='message-input' type="text" placeholder="Message" name="content" onChange={this.handleChange('content')}required/>
                    <input className="submit" type="submit" value="Send"/>
                </form>
            </div>
        )
    }
}
    
