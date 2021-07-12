import React from 'react';
import styled from 'styled-components';
import resume from '../images/img1.jpg';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="right-content">
                <img src={ resume } alt='resume' />
            </div>
            <div className="left-content">

            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`

`;

export default ImageSection
