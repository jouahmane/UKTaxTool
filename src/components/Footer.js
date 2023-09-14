import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Footer = () => {
    return (
        <footer>
            <Container className='mt-5'>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <p>
                            <span className="text-primary">UK</span>
                            <span className="text-danger">Tax</span>
                            <span className="text-primary">Calculator</span>
                            does not provide financial or tax advice, and the calculations might be innacurate. Please consult a tax advisor before making any financial decisions.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
