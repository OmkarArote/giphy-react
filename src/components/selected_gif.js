import React from 'react';

// Self Defined Components
import { Card, Badge } from 'react-bootstrap';

class SELETED_GIF extends React.Component {
    render() {
        return (
            <div className='border rounded'>
                <div className='m-4'>
                    <h4>Selected Gif's & Comments <Badge bg="secondary">{this.props.data.length}</Badge></h4>
                    <hr />
                    <div className='row'>
                        {this.props.data.map(data => (
                            <div className='col-12 mb-3' key={data.id}>
                                <Card>
                                    <Card.Img variant="top" src={data.url} />
                                    <Card.Body>
                                        <Card.Title>Comment:</Card.Title>
                                        <Card.Text>
                                            {data.comment}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default SELETED_GIF;