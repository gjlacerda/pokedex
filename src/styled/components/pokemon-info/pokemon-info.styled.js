import styled from 'styled-components';
import {bodyBg} from 'styled/app/colors.styled';
import types from 'styled/app/pokemon-type-colors.styled';

export const Container = styled.div`
    background-color: ${bodyBg};
    height: 100%;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: ${props => types[props.type]};
    padding-bottom: 40px;
    height: 200px;
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
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const About = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    margin: -40px 8px 0 8px;
    border-radius: 2px;
    padding: 15px;
    font-size: 14px;
    line-height: 1.3;
    text-align: center;
`;