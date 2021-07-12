import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../images/react.svg';
import dbase from '../images/dbase.svg';
import web from '../images/webdev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'Services'} />
                <div className="services">
                    <ServiceCard image={design} title={'Web Design'} paragraph={'Text about web design.'}/>
                    <ServiceCard image={dbase} title={'Database Manipulation'} paragraph={'Text about databases.'}/>
                    <ServiceCard image={web} title={'App Development'} paragraph={'Text about developing web apps.'}/>

                </div>

            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        display: flex;
        justify-content: space-between;
        margin-top: 5rem;
    }

`;

export default ServicesSection;
