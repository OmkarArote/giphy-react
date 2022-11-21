import React from 'react';

// Self Defined Components
import { Card } from 'react-bootstrap';

class SELETED_GIF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifSelected: [
                {
                    id: 1,
                    url: "https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif",
                    comment: "This is a comment"
                },
                {
                    id: 2,
                    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif",
                    comment: "This is a comment"
                },
            ]
        };
    };
    render() {
        return (
            <div className='border rounded'>
                <div className='m-4'>
                    <h3>Selected Gif's & Comments</h3>
                    <hr />
                    <div className='row'>
                        {this.state.gifSelected.map(data => (
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