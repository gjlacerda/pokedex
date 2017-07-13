import React from 'react';
import ReactDOM from 'react-dom';
import PokemonService from 'services/pokemon/pokemon.service';
import PokemonInfo from 'components/pokemon-info/pokemon-info';
import InfiniteScroll from 'components/infinite-scroll/infinite-scroll';
import Modal from 'components/modal/modal';
import {List, Item, Content, ImageWrapper} from 'styled/components/pokemon-list/pokemon-list.styled';
import {Loading} from 'styled/app/loading.styled';
import {BrowserRouter, withRouter} from 'react-router-dom';

class PokemonList extends React.Component {

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

        // Open modal if a pokemon id was passed in url
        if (this.props.pokemonId) {

            //this.pokemonService.get(this.props.pokemonId).then(response => {
            this.pokemonService.get().then(response => {
                this.openModal(response);
            });
        }
    }

    render() {

        return (
            <InfiniteScroll window="true" paginate={this.getPokemons.bind(this)} offset="400">

                {this.state.loading && <Loading size="80" center/>}

                <List>
                    {this.state.pokemons.map(pokemon => (
                        <Item key={pokemon.id}>
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

        this.props.history.replace('/' + pokemon.id);

        ReactDOM.render(
            <BrowserRouter>
                <Modal>
                    <PokemonInfo pokemon={pokemon}/>
                </Modal>
            </BrowserRouter>,
            document.getElementById('modalContainer')
        );
    }
}

export default withRouter(PokemonList);