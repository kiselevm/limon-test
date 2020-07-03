import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as errorActions from '../../../actions/shared/modal/error.action.jsx';
import { DEFAULT_ERROR_TITLE, DEFAULT_ERROR_TEXT } from '../../../constants/error.constant.jsx';
import { Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ErrorModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { error, toggleError } = this.props;
        const { show, title, errors } = error;

        if (show) {
            const closeModal = () => toggleError(false);
            const errorText = errors !== null && errors !== undefined && errors.length > 0 ? errors.map((item, index) => { return <div key={index}>{item.description}</div>; }) : DEFAULT_ERROR_TEXT;

            return (
                <Modal isOpen={show} toggle={closeModal} backdrop="static">
                    <ModalHeader>{title !== null && title !== undefined ? title : DEFAULT_ERROR_TITLE}</ModalHeader>
                    <ModalBody>
                        <Form>
                            {errorText}
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={closeModal}>Закрыть</Button>
                    </ModalFooter>
                </Modal>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    };
};

export default connect(mapStateToProps, errorActions)(ErrorModal);