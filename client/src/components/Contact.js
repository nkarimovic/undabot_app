import React, {Component} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            message: '',
            submitSuccess: '',
            emailErr: '',
            messageErr: ''
        }
        this.baseState = this.state;
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/API/contact', this.state)
            .then(response => {
                console.log("Response: "+response.data);
                if (response.status === 200) {
                    this.setState(this.baseState);
                    this.setState({submitSuccess: response.data});
                }
            })
            .catch(error => {
                console.log(error.response.data.errors);
                this.setState({emailErr: '', messageErr: '', submitSuccess: ''});
                error.response.data.errors.map(err => {
                    return this.setState({[err.param+'Err']: err.msg});
                })
            });
    }

    render() {
        const { email, message } = this.state;

        return (
            <Container>
                <Form onSubmit={this.submitHandler} className={"frm--body"}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>

                        <Form.Control className={this.state.emailErr ? 'border-danger' : ''} type="email"
                                      placeholder="Enter email" name={'email'} value={email} onChange={this.changeHandler} />

                        <Form.Text className={`frm--status text-danger ${this.state.emailErr ? ' visible' : ' invisible'}`}>
                            Please enter a valid email.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicMsg">
                        <Form.Label>Message:</Form.Label>

                        <Form.Control className={this.state.messageErr ? 'border-danger' : ''} as="textarea"
                                      rows={3} placeholder="Enter your message" name={'message'} value={message} onChange={this.changeHandler} />

                        <Form.Text className={`frm--status text-danger ${this.state.messageErr ? ' visible' : ' invisible'}`}>
                            Message cannot be less than 30 characters.
                        </Form.Text>
                    </Form.Group>

                    <Form.Text className={`frm--status text-success ${this.state.submitSuccess ? ' visible' : 'invisible'}`}>
                        Your message has been sent!
                    </Form.Text>

                    <Button type="submit">
                        Send message
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Contact;