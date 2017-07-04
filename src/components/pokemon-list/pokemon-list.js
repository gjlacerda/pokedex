import React from 'react';
import PokemonService from '~/src/services/pokemon/pokemon.service';
import InfiniteScroll from '~/src/components/infinite-scroll/infinite-scroll';
import {List, Item, Content, ImageWrapper} from '~/src/styled/components/pokemon-list/pokemon-list.styled';

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
            <InfiniteScroll window="true" paginate={this.getPokemons.bind(this)} offset="400">
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
            </InfiniteScroll>
        );
    }

    /**
     * Get a list of pokemons
     */
    getPokemons() {
        return this.pokemonService.list().then(response => {
            this.setState({
                pokemons: this.state.pokemons.concat(response)
            });
        });
    }
}