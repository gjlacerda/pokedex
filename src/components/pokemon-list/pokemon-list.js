import React from 'react';
import PokemonService from '~/src/services/pokemon.service';
import {List, Item, ImageWrapper, ItemWrapper} from './pokemon-list.styled';

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
                    <ItemWrapper key={pokemon.name}>
                        <Item>
                            <ImageWrapper>
                                <img src={pokemon.sprite}/>
                            </ImageWrapper>
                        </Item>
                    </ItemWrapper>
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