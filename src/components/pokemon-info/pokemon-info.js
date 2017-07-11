import React from 'react';
import {Container, Header, ImageWrapper, Name, About} from 'styled/components/pokemon-info/pokemon-info.styled';
import PokemonService from 'services/pokemon/pokemon.service';

export default class PokemonInfo extends React.Component {

    constructor(props) {

        super(props);

        this.pokemonService = new PokemonService();
    }

    get capitalizedName() {
        return this.props.info.name.charAt(0).toUpperCase() + this.props.info.name.slice(1);
    }

    render() {

        return (
            <Container>
                <Header type={this.getMainType()}>
                    <ImageWrapper>
                        <img src={this.props.info.sprite}/>
                    </ImageWrapper>
                    <Name>
                        {this.capitalizedName}
                    </Name>
                </Header>
                <About>
                    teste
                </About>
            </Container>
        );
    }

    getMainType() {
        return this.pokemonService.getMainType(this.props.info.name);
    }

}