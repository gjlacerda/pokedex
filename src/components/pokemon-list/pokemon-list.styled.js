import styled from 'styled-components';
import {grayLight} from '~/src/styled/colors.styled';

const spriteWidth = '96px';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: -3px;
    padding: 0;
    list-style: none;
`;

export const ItemWrapper = styled.li`
    display: flex;
    flex-basis: 20%;
    justify-content: center;
`;

export const Item = styled.div`
    width: 100%;
    margin: 3px;
    border: 1px solid ${grayLight};
    border-radius: 2px;
    background-color: white;
    cursor: pointer;
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