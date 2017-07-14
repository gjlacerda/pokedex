import styled from 'styled-components';
import {bodyBg} from 'styled/app/colors.styled';
import types from 'styled/app/pokemon-type-colors.styled';

export const Container = styled.div`
    background-color: ${bodyBg};
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => types[props.type].light};
    padding-bottom: 50px;
    height: 210px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(255,255, 255, 0.5);
`;

export const Name = styled.span`
    color: #fff;
    margin-top: 8px;
    font-size: 18px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const About = styled.div`
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
    margin: -50px 8px 0 8px;
    border-radius: 2px;
    padding: 15px;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
`;

export const Types = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Type = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-radius: 3px;
    color: white;
    text-transform: uppercase;
    background-color: ${props => types[props.type].dark};
    
    span {
        font-size: 13px;
        padding: 3px 0;
        display: block;
    }
    
    &:not(:last-child) {
        margin-right: 8px;
    }
`;