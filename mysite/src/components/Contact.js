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

    // handleChange = property => event => {
    //     const newMessage = this.state.message
    //     newMessage[property] = event.target.value
    //     this.setState({ 
    //         message: newMessage
    //     })
    // }

    handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        event.target.reset()
    }

    render(){
        return (
            <div className="contact-form">
                <h1>Contact Me</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your Name" name="name" required />
                    <input type="text" placeholder="E-Mail" name="email" required/>
                    <input className='message-input' type="text" placeholder="Message" name="content" required/>
                    <input className="submit" type="submit" value="Send"/>
                </form>
            </div>
        )
    }
}
    
