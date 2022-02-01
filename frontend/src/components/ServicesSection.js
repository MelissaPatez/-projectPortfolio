import React from 'react'
import styled from 'styled-components'//css global
import AboutUs from '../pages/AboutUs'
import { About, Description, Image } from '../styles' // css focado na pag

//impor icons
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faGraduationCap, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServicesSection = () => {
    return(

        <Services>
            <Image>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vZDR_C84-RC5IegITqF5d5_H5NKb4Fjj6w&usqp=CAU"/>
            </Image>

            <ServiceDescription>
                <h2> Things I do</h2>
                <Cards>
                    <Card>
                        <div className='icon'>
                        <FontAwesomeIcon  icon={ faLaptopCode } size='4x'/>
                            <h3>Portfolio</h3>
                        </div>
                        <p>Check my work on my Portfolio</p>
                    </Card>

                    <Card>
                        <div className='icon'>
                        <FontAwesomeIcon  icon={ faGraduationCap } size='4x'/>
                            <h3>Courses</h3>
                        </div>
                        <p>Check my Courses</p>
                    </Card>

                    <Card>
                        <div className='icon'>
                        <FontAwesomeIcon  icon={ faImages } size='4x'/>
                            <h3>Hobbies</h3>
                        </div>
                        <p>Check my Hobbies</p>
                    </Card>

                    <Card>
                        <div className='icon'>
                            <FontAwesomeIcon  icon={ faGithubSquare } size='4x'/>
                            <h3>Github</h3>
                        </div>
                        <p>Check my Github</p>
                    </Card>

                </Cards>


            </ServiceDescription>
        </Services>
        
    )
}

//sobreescrever styled About
const Services = styled(About)`
    h2{
        padding-top: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const ServiceDescription = styled(Description)`
    flex: 2;
`;

//display: flex; --> distribui as divs lado a lado
//flex-wrap: wrap; --> quando não cabe na linha joga para proxima

//outro exemplo para styles
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`;

const Card = styled.div`    
    padding: 0.5rem;
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;  
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;        
    }
`;

export default ServicesSection