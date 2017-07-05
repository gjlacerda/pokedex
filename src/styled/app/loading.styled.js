import styled, {css} from 'styled-components';
import {grayLight, grayDark} from 'styled/app/colors.styled';

const defaultSize = '50px';

/**
 * Get the size passed as parameter or get default
 * @param size
 */
const formatSize = (size) => size ? size + 'px' : defaultSize;

/**
 * Calculate the size of border (12%) by the size of the element
 * @param size
 * @returns {string}
 */
const formatBorder = (size) => {
    let finalSize = size ? size : parseInt(defaultSize);
    return (finalSize / 100 * 12) + 'px';
};

/**
 * Calculte the position to center the element
 * @param size
 * @returns {string}
 */
const getCenter = (size) => {
    let finalSize = formatSize(size);
    return `calc(50% - ${parseInt(finalSize) / 2}px)`;
};

export const Loading = styled.div`
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    width: ${props => formatSize(props.size)};
    height: ${props => formatSize(props.size)};   
    border-top: ${props => formatBorder(props.size)} solid ${grayLight};
    border-right: ${props => formatBorder(props.size)} solid ${grayLight};
    border-bottom: ${props => formatBorder(props.size)} solid ${grayLight};
    border-left: ${props => formatBorder(props.size)} solid ${grayDark};
    transform: translateZ(0);
    animation: load 1s infinite linear;
    border-radius: 50%;
       
    &:after {
        border-radius: 50%;
        width: ${props => formatSize(props.size)};
        height: ${props => formatSize(props.size)}; 
    }
     
    @keyframes load {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    
    ${props => props.center && css`
        position: fixed;
        top: ${props => getCenter(props.size)};
        left: ${props => getCenter(props.size)};
    `}
`;