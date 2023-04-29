import React from 'react';
import Pokeball from '../../assets/img/pokeball.png';
import { Container, NotFounded, Logo } from './not.found.styles';

function NotFound() {
    return (
        <Container>
            <NotFounded>
                <h1>404</h1>
                <h2>Ops... Page does not exist</h2>
                <Logo src={Pokeball} alt="Pokeball" />
            </NotFounded>
        </Container>
    )
}

export default NotFound;


