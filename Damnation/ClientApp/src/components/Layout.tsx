import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <h1 className="title">-DAMNATION-</h1>
        <NavMenu/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);
