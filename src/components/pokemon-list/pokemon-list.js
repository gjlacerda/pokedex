import React from 'react';
import ReactDOM from 'react-dom';
import PokemonService from 'services/pokemon/pokemon.service';
import PokemonInfo from 'components/pokemon-info/pokemon-info';
import InfiniteScroll from 'components/infinite-scroll/infinite-scroll';
import Modal from 'components/modal/modal';
import {List, Item, Content, ImageWrapper} from 'styled/components/pokemon-list/pokemon-list.styled';
import {Loading} from 'styled/app/loading.styled';

export default class PokemonList extends React.Component {

    constructor() {

        super();

        this.pokemonService = new PokemonService();

        this.state = {
            modal: false,
            loading: false,
            pokemons: []
        };
    }

    componentWillMount() {
        this.getPokemons();
    }

    render() {

        return (
            <InfiniteScroll window="true" paginate={this.getPokemons.bind(this)} offset="400">

                {this.state.loading && <Loading size="80" center/>}

                <List>
                    {this.state.pokemons.map(pokemon => (
                        <Item key={pokemon.name}>
                            <Content onClick={this.openModal.bind(this, pokemon)}>
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

    getPokemons() {

        this.setState({
            loading: true
        });

        return this.pokemonService.list().then(response => {
            this.setState({
                pokemons: this.state.pokemons.concat(response),
                loading: false
            });
        });
    }

    openModal(pokemon) {

        this.setState({
            loading: true
        });

        this.pokemonService.get(pokemon.name).then(result => {

            // Get the sprite
            this.pokemonService.pokemons[pokemon.name].sprite = pokemon.sprite;

            ReactDOM.render(
                <Modal>
                    <PokemonInfo info={result}/>
                </Modal>,
                document.getElementById('modalContainer')
            );

            this.setState({
                loading: false
            });
        });
    }
}