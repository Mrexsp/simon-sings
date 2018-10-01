import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class DonateModal extends React.Component {

    render() {
        return (
            <Container>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>Donate</ModalHeader>
                    <ModalBody className="text-center">
                        <button className="btn btn-primary m-3 mt-1" disabled>Paypal</button>
                        <p>TRX: <b className="ml-3">0xee1e7ec19f230845c2851b01a1a4e14604d15dd4</b></p>
                        <p>BTC: <b className="ml-3">1JV8vHa4gxFHbeuJ3bXcKLB7Suj3KAzAQC</b></p>
                        <p>ETH: <b className="ml-3">0xee1e7ec19f230845c2851b01a1a4e14604d15dd4</b></p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.toggle}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default DonateModal;