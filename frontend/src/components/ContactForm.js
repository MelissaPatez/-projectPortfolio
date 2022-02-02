import React from 'react'
import styled from 'styled-components'//css global

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactForm = () => {
    return(
        <Form id="contact-form" method='post'>
            <Input>
                <label>Name:</label> 
                <input  type="text"/>
            </Input>
            <Input>
                <label>Email:</label> 
                <input  type="email"/>
            </Input>
            <Input>
                <label>Message:</label> 
                <textarea rows='5'/>
            </Input>
            <button type="submit">Submit</button>
        </Form>
    )
}

const Input = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 80vh;
    label{
        color: white;
        padding-top: 1rem;
    }
    input{
        border: 2px solid #416cd5;
        padding: 12px 20px;
        border-radius: 5%;
        width: 100%;
        height: 100%;
        
    }
    input:focus {   
        background-color: #416CD5;
        color: white;
    }
    textarea{
        width: 100%;
        height: 150%;
        padding: 12px 20px; 
        box-align: border-box; 
        border: 2px solid #416cd5;
        border-radius: 5%;
        background-color: #f8f8f8;
        resize: none;

        
    }
    textarea:focus{
        background-color: #416CD5;
        color: white;
    }
`;

const Form = styled.form`
    button{
        margin-top: 1rem;

    }
`;

export default ContactForm