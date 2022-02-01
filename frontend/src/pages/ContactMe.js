import React from 'react'
import styled from 'styled-components'//css global

const ContactMe = () => {
    return (
        <ContactStyled>
            <Title > 
                <h2>Get in touch</h2>
            </Title >
            <Areas>
                <div id="form">
                    <form id="contact-form" method='post'>
                        Name: <input  type="text"/>
                        Email: <input  type="email"/>
                        Message: <textarea rows='5'/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <Network>
                    
                    <Social href='https://github.com/MelissaPatez' target='_blank'>
                        icon
                        <h3>github.com/MelissaPatez</h3>
                    </Social>

                    <Social>
                        icon
                        <h3>LinkedIn</h3>
                    </Social>
                    
                </Network>
            </Areas>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const Title = styled.div`
   margin-bottom: 4rem;
   h2{
       color: white;
   }
`;

const Areas = styled.div`
   display: flex;
   align-items: center;
`;

const Network = styled.div`
    padding: 1rem 5rem;
`;

// a é link  target='_blank' abre em outra janela
const Social = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 2rem;
    text-decoration: none;
    &:hover{
        background: #7a7e85;
        cursor: pointer; 
    }
`;

export default ContactMe