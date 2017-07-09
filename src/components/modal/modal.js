import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Content, Close} from 'styled/components/modal/modal.styled';

export default class Modal extends React.Component {

    constructor(props) {

        super(props);

        console.log(this.props.pokemon);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Close onClick={this.close.bind(this)}>&times;</Close>
                    {this.props.children}
                </Content>
            </Container>
        );
    }

    close() {
        ReactDOM.unmountComponentAtNode(document.getElementById('modalContainer'));
    }
}