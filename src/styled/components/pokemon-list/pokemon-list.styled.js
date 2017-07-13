import styled from 'styled-components';
import {grayLight} from 'styled/app/colors.styled';
import media from 'styled/app/media.styled';

const spriteWidth = '96px';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 2px;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    
    ${media.phone`
        flex-basis: 33.3333%;
    `}
    
    ${media.tablet`
        flex-basis: 25%;
    `}
    
    ${media.desktop`
        flex-basis: 20%;
    `}
`;

export const Content = styled.div`
    width: 100%;
    margin: 3px;
    border: 1px solid ${grayLight};
    border-radius: 2px;
    background-color: white;
    cursor: pointer;
    
    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
`;

export const ImageWrapper = styled.div`
    padding-bottom: 100%;
    position: relative;
    
    img {
        position: absolute;
        top: calc(50% - ${spriteWidth} / 2);
        left: calc(50% - ${spriteWidth} / 2);
    }
`;