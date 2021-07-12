import React from 'react';
import styled from 'styled-components';

function ContactItem({title, icon, contact1}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {
                    icon
                }
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
                
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 2;
    background-color: var(--card-color);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2rem;
    }
    .left-content{
        padding: 1.5rem;
        border: 1px solid var(--trim-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 1.5rem;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1rem;
            padding: .6rem;
        }
        p{
            padding: .1rem 0;
            font-size: 1rem;
        }
    }

`;

export default ContactItem
