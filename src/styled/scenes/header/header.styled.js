import {Container as ContainerMaster} from 'styled/app/container.styled';
import styled from 'styled-components';
import {grayLight} from 'styled/app/colors.styled';

export const Container = styled.header`
    height: 60px;
    border-bottom: 1px solid ${grayLight};
    background-color: #fff;
    margin-bottom: 40px;
`;

export const Content = ContainerMaster.extend`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    
    .icon {
        display: block;
        width: 35px;
        height: 35px;
        background-image: url(src/assets/images/logo.svg);
    }
    
    .title {
        display: block;
        margin: 0 0 0 8px;
        font-size: 22px;
        font-weight: 100;
        text-transform: uppercase;
    }    
`;