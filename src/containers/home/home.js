import React from 'react';
import PokemonList from '~/src/components/pokemon-list/Pokemon-list';
import {Container} from '~/src/styled/app/container.styled';

class Home extends React.Component {

    render() {
        return (
            <main>
                <Container>
                    <PokemonList/>
                </Container>
            </main>
        );
    }
}

export default Home;