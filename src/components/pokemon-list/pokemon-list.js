import React from 'react';
import PokemonService from 'services/pokemon/pokemon.service';
import InfiniteScroll from 'components/infinite-scroll/infinite-scroll';
import {List, Item, Content, ImageWrapper} from 'styled/components/pokemon-list/pokemon-list.styled';
import {Loading} from 'styled/app/loading.styled';

export default class PokemonList extends React.Component {

    constructor() {

        super();

        this.pokemonService = new PokemonService();

        this.state = {
            pokemons: [],
            loading: true
        };

        this.getPokemons();
    }

    render() {

        return (
            <InfiniteScroll window="true" paginate={this.getPokemons.bind(this)} offset="400">
                {this.state.loading && <Loading size="50" center/>}
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
                pokemons: this.state.pokemons.concat(response),
                loading: false
            });
        });
    }
}