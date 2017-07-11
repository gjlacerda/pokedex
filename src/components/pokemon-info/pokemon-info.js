import React from 'react';
import {Container, Header, ImageWrapper, Name, About, Types, Type} from 'styled/components/pokemon-info/pokemon-info.styled';
import PokemonService from 'services/pokemon/pokemon.service';

export default class PokemonInfo extends React.Component {

    constructor(props) {

        super(props);

        this.pokemonService = new PokemonService();
    }

    get capitalizedName() {
        return this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1);
    }

    render() {

        return (
            <Container>
                <Header type={this.getMainType()}>
                    <ImageWrapper>
                        <img src={this.props.pokemon.sprite}/>
                    </ImageWrapper>
                    <Name>
                        {this.capitalizedName}
                    </Name>
                </Header>
                <About>
                    <Types>
                        {this.props.pokemon.types.map(type => (
                            <Type type={type.type.name} key={type.slot}>
                                <span>{type.type.name}</span>
                            </Type>
                        ))}
                    </Types>

                    {this.props.pokemon.description}
                </About>
            </Container>
        );
    }

    getMainType() {
        return this.pokemonService.getMainType(this.props.pokemon);
    }

}