import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './GetPro.css'
import getproimg1 from '../../getpro1.svg'
import getproimg2 from '../../getpro2.svg'

const GetPro = () => {
    return (
        <div className='getpro-container'>
            <Card style={{ width: '18rem' }}>
                <h1>Monthly</h1>
                <Card.Img variant="top" src={getproimg1} />
                <Card.Body>
                    <Card.Title> <h1>$12.99 /mo</h1> </Card.Title>
                    <Card.Text>
                        Billed monthly


    </Card.Text>
                    <Button className='btn-pro' variant="primary">Select a Plan</Button>
                </Card.Body>
            </Card>



            <Card style={{ width: '18rem' }}>
                <h1>Annual</h1>
                <Card.Img variant="top" src={getproimg2} />
                <Card.Body>
                    <Card.Title> <h1>$5.83 /mo</h1> </Card.Title>
                    <Card.Text>
                        Billed annually as $69.99


    </Card.Text>
                    <Button className='btn-pro' variant="primary">Try 14 days free trial</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GetPro;
