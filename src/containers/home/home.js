import React from 'react';
import PokemonList from '~/src/components/pokemon-list/Pokemon-list';
import {Container} from '~/src/styled/container.styled';

class Home extends React.Component {

    render() {
        return (
            <Container>
                <PokemonList/>
            </Container>
        );
    }
}

export default Home;