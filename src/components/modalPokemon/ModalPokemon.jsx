import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Container, DetailWrapper } from './styles';

const ModalPokemon = (props) => {
    const { pokemon, open, handleClose } = props;

    return (
        <Dialog onClose={handleClose} open={open}>
            <Container>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>

                <DetailWrapper>
                    <div>
                        <p>Type: <span>{pokemon.types[0].type.name}</span></p>
                        <p>HP: <span>{pokemon.stats[0].base_stat}</span></p>
                    </div>
                    <div>
                        <p>Attack: <span>{pokemon.stats[1].base_stat}</span></p>
                        <p>Defense: <span>{pokemon.stats[3].base_stat}</span></p>
                    </div>
                </DetailWrapper>
            </Container>
        </Dialog>
    );
}

export default ModalPokemon;