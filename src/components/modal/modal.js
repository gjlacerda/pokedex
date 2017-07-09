import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Content} from 'styled/components/modal/modal.styled';

export default class Modal extends React.Component {

    constructor(props) {

        super(props);

        console.log(this.props.pokemon);
    }

    render() {
        return (
            <Container onClick={this.close.bind(this)}>
                <Content></Content>
            </Container>
        );
    }

    close() {
        ReactDOM.unmountComponentAtNode(document.getElementById('modalContainer'));
    }
}