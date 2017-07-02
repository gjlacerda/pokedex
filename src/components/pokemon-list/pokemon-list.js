import React from 'react';
import {Wrapper} from './pokemon-list.styled';

const api = 'http://pokeapi.co/api/v2/pokemon';

export default class PokemonList extends React.Component {

    constructor() {
        super();

        this.state = {
            pokemons: []
        };

        this.getPokemons();
    }

    render() {
        return (
            <Wrapper>
                <h1>{this.state.pokemons.length}</h1>
            </Wrapper>
        );
    }

    /**
     * Lista all pokemons from API
     */
    getPokemons() {
        fetch(api)
            .then(response => response.json())
            .then(({results}) => this.setState({
                pokemons: results
            }));
    }
}