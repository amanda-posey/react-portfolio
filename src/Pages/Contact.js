import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ContactItem from '../Components/ContactItem';

function Contact() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactStyled>
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                <div className="contact-title">
                    <h4>Get in touch...</h4>
                </div>
                    <form className="form">
                        <div className="form-field">
                            <label htmlFor="name">Your name: </label>
                            <input type='text' id='name'></input>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Your email: </label>
                            <input type='text' id='email'></input>
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject">Subject: </label>
                            <input type='text' id='subject'></input>
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Message: </label>
                            <textarea name='textarea' id='textarea' cols='30' rows='10'></textarea>
                        </div>
                        <div className="form-field">
                            <PrimaryButton title={'Send'} />
                        </div>
                    </form>

                </div>
                <div className="right-content">
                    <ContactItem icon={phone} title={'Phone'} contact1={'+1-304-805-3170'} />
                    <ContactItem icon={email} title={'Email'} contact1={'amanda.posey@live.com'} />
                </div>
            </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        .right-content{
            display: flex;
            flex-direction: column;
            
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    
                }
                input{
                    border: 1px solid var(--trim-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    outline: none;
                    border: 1px solid var(--trim-color);
                    width: 100%;
                    padding: .75rem 1rem;
                }
            }
        }
    }
`;

export default Contact
