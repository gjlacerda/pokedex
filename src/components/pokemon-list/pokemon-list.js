import React from 'react';
import PokemonService from '~/src/services/pokemon.service';
import {List, Item, Content, ImageWrapper} from './pokemon-list.styled';

export default class PokemonList extends React.Component {

    constructor() {

        super();

        this.pokemonService = new PokemonService();

        this.state = {
            pokemons: []
        };

        this.getPokemons();
    }

    render() {

        return (
            <List>
                {this.state.pokemons.map(pokemon => (
                    <Item key={pokemon.name}>
                        <Content>
                            <ImageWrapper>
                                <img src={pokemon.sprite}/>
                            </ImageWrapper>
                        </Content>
                    </Item>
                ))}
            </List>
        );
    }

    /**
     * Get a list of pokemons
     */
    getPokemons() {
        this.pokemonService.list()
            .then(response => this.setState({pokemons: response}));
    }
}