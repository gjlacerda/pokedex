import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Content, Close} from 'styled/components/modal/modal.styled';

export default class Modal extends React.Component {
    
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

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    close() {
        ReactDOM.unmountComponentAtNode(document.getElementById('modalContainer'));
    }

    /**
     * Close the modal on Esc
     * @param event
     */
    onKeyDown(event) {

        if (event.keyCode !== 27) {
            return;
        }

        this.close();
    }
}