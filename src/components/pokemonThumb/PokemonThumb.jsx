import React from 'react'

import { ButtonHeart, Container, DetailWrapper } from './styles'

const PokemonThumb = (props) => {

    const { pokemon, onClickDetails, handleClickOpen, updateFavoritePokemons } = props;

    const handleDetails = () => {
        onClickDetails(pokemon.name);
        handleClickOpen(true);
    }

    return (
        <Container >
            <ButtonHeart onClick={() => updateFavoritePokemons(pokemon)}>
                ❤️
            </ButtonHeart>
            <div onClick={handleDetails}>
                <div className="number">
                    <small>#0{pokemon.id}</small>
                </div>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <DetailWrapper>
                    <h3>{pokemon.name}</h3>
                    <small>Type: {pokemon.types[0].type.name}</small>
                </DetailWrapper>
            </div>
        </Container>
    )
}

export default PokemonThumb
