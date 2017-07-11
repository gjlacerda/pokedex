import React from 'react';
import PokemonList from 'components/pokemon-list/Pokemon-list';
import {Container} from 'styled/app/container.styled';

export default class Home extends React.Component {

    render() {
        return (
            <main>
                <Container>
                    <PokemonList/>
                </Container>
                <div id="modalContainer"></div>
            </main>
        );
    }
}