import React from 'react'
import styled from 'styled-components'//css global
import { About, Description, Image } from '../styles' // css focado na pag

const AboutSection = () => {
    return(
        <About>
            <Description>
                <h2>Melissa Patez</h2>
                <h2>Developer</h2>


                <p>Texto descrição sobre Melissa Patez</p>

                <button>Contact Me</button>
            </Description>
         
            <Image>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />

            </Image>


        </About>
    )
}

export default AboutSection