import React from 'react';
import {Container, Content, Logo} from 'styled/scenes/header/header.styled';

export default class Header extends React.Component {

    render() {
        return (
            <Container>
                <Content>
                    <Logo>
                        <i className="icon"></i>
                        <h1 className="title">Pokedex</h1>
                    </Logo>
                </Content>
            </Container>
        );
    }
}