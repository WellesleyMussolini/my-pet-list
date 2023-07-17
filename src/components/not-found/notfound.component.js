import React from 'react';
import { Container, NotFounded } from './notfound.styles';

function NotFound() {
    return (
        <Container>
            <NotFounded>
                <h1>404</h1>
                <h2>Ops... Page does not exist</h2>
            </NotFounded>
        </Container>
    )
}

export default NotFound;


