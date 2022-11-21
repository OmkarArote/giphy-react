import React from 'react';

// Constants
import { variable } from '../constants'

// Self Defined Components
import SELETED_GIF from './selected_gif'

// Pre Defined Components
import { Image, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

// CSS (External CSS)
import '../assets/css/style.css'

class GIF_RESULT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModle: false,
            gifSrcUrl: '',
            gifResponse: []
        };
    };
    handleModleOpen = () => {
        this.setState({ showModle: true })
    }
    handleSubmit = () => {
        this.handleModleClose()
    }
    handleModleClose = () => {
        this.setState({ showModle: false })
    }
    componentDidMount() {
        console.log(this.props.data)
        axios.get(variable.api_url + "trending", {
            params: {
                api_key: variable.api_key,
                limit: 9
            }
        })
            .then((response) => {
                this.setState({ gifResponse: response.data.data })
            })
    }
    render() {
        return (
            <div className='row'>
                <div className='col-8'>
                    <div className='border rounded'>
                        <div className='m-4'>
                            <h3>Search Result</h3>
                            {/* <div className='row'>
                                {this.props.data.map(data => (
                                    <div className='col-4 mb-4' id={data.images.original.url} key={data.id}>
                                        <Image className='fix-img-size' src={data.images.original.url} onClick={async () => {
                                            await this.setState({ gifSrcUrl: data.images.original.url })
                                            console.log(this.state.gifSrcUrl)
                                            this.handleModleOpen()
                                        }} rounded></Image>
                                    </div>
                                ))}
                            </div> */}
                            <hr />
                            <h3>Trending</h3>
                            <hr />
                            <div className='row'>
                                {this.state.gifResponse.map(data => (
                                    <div className='col-4 mb-4' id={data.images.original.url} key={data.id}>
                                        <Image className='fix-img-size' src={data.images.original.url} onClick={async () => {
                                            await this.setState({ gifSrcUrl: data.images.original.url })
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
                                        <hr />
                                        <label for="exampleFormControlTextarea1" className="form-label">Write Your Comment Here:</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => { this.handleSubmit() }}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <SELETED_GIF />
                </div>
            </div>
        );
    }
}

export default GIF_RESULT;