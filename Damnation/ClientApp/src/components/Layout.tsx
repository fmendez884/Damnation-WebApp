import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import TitleSection from './TitleSection/TitleSection';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <TitleSection/>
        <NavMenu/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);
