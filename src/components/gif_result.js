import React from 'react';

// Pre Defined Components
import { Image, Modal, Button } from 'react-bootstrap';

// CSS (External CSS)
import '../assets/css/style.css'

class GIF_RESULT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModle: false,
            gifSrcUrl: '',
            gifResponse: [
                {
                    id: 1,
                    url: "https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif"
                },
                {
                    id: 2,
                    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
                },
                {
                    id: 3,
                    url: "https://buffer.com/library/content/images/2022/03/uu1yPco---Imgur.gif"
                },
                {
                    id: 4,
                    url: "https://i.imgur.com/KOXOBiN.gif"
                }
            ]
        };
    };
    handleModleOpen = () => {
        this.setState({ showModle: true })
    }
    handleSubmit = () =>{
        this.handleModleClose()
    }
    handleModleClose = () => {
        this.setState({ showModle: false })
    }
    render() {
        return (
            <div>
                <h3>Search Result</h3>
                <hr />
                <div className='row'>
                    {this.state.gifResponse.map(data => (
                        <div className='col-4 mb-4' id={data.id} key={data.id}>
                            <Image className='fix-img-size' src={data.url} onClick={async () => {
                                await this.setState({ gifSrcUrl: data.url })
                                console.log(this.state.gifSrcUrl)
                                this.handleModleOpen()
                            }} rounded></Image>
                        </div>
                    ))}
                </div>
                <Modal show={this.state.showModle} onHide={this.handleModleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selected Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='m-2'>
                            <Image className='img-fluid border' src={this.state.gifSrcUrl}></Image>
                            <hr/>
                            <label for="exampleFormControlTextarea1" className="form-label">Write Your Comment Here:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=> {this.handleSubmit()}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default GIF_RESULT;