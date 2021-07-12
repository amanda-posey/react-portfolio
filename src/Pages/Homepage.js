import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typed from 'react-typed';
import Particle from '../Components/Particle';

function Homepage() {
    return (
        <HomepageStyled>
        <div className="particle-con">
            <Particle />
            <div className="p-particles-js">
                
            </div>
            <div className="typography">
                <h1>Hi! I'm <span>Amanda Posey.</span></h1>
                <p>
                I really like...
                <Typed 
                className='typed-text'
                strings={['web design.', 'debugging.', 'web development.', 'puzzle solving.', 'comic relief.']}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
                </p>
                <div className="icons">
                    <a href="https://github.com/amanda-posey" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/amanda-posey-software-engineer/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </div>
        </HomepageStyled>
    )
}

const HomepageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--border-color);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                &:hover{
                    border: 2px solid var(--secondary-color);
                    color: var(--secondary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
        }
    }

    /* .header-wrapper {
        position: relative;
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(code_background.jpg) no-repeat;
        background-size: cover;
        background-position: center;
        height: 90vh;
    } */

`;

export default Homepage
