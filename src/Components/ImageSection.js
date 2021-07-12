import React from 'react';
import styled from 'styled-components';
import resume from '../images/resume.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt='resume' />
            </div>
            <div className="right-content">
                    <h4>I am <span>Amanda Posey</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quasi dicta ex! Cumque sit dolores, quia commodi repellendus ducimus? 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Name</p>
                        <p>Title</p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Amanda Posey</p>
                        <p>: Software Engineer</p>
                        <p>: West Virginia, USA</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Resume'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 5rem;
    .left-content{
        width: 100%;
        img{
            width: 90%;
            height: 100%;
            object-fit: cover;

        }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                color: var(--accent-color);
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.5rem;
            .info-title{
                padding-right: 2rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection
