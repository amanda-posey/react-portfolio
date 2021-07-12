import React from 'react';
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt='icon' />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    width: 20rem;
    background-color: var(--card-color);
    margin: 0 1rem;
    border-left: 1px solid var(--trim-color);
    border-right: 1px solid var(--trim-color);
    border-bottom: 1px solid var(--trim-color);
    border-top: 8px solid var(--trim-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--sidebar-dark-color);
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        img{
            height: 50px;
        }
        h4{
            color: var(--white-color);
            font-size: 1.5rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: '';
                width: 4rem;
                background-color: var(--trim-color);
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p{
            padding: .75rem 0;
        }
    }
`;


export default ServiceCard
