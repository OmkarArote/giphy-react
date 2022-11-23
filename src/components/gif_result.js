import React from 'react';

// Constants
import { variable } from '../constants'

// Self Defined Components
import SELETED_GIF from './selected_gif'

// Pre Defined Components
import { Image, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

// CSS (External CSS)
import '../assets/css/style.css'

class GIF_RESULT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModle: false,
            gifSrcUrl: '',
            comment: '',
            id: '',
            gifTrendingResponse: [],
            gifCommentResponse: []
        };
    };
    handleModleOpen = () => {
        this.setState({ showModle: true })
    }
    handleSubmit = () => {
        if (this.state.comment === '' || this.state.url === '' || this.state.id === '') {
            toast.error("Field is empty", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'foo-bar'
            })
        } else {
            let comment_user = {
                id: this.state.id,
                url: this.state.gifSrcUrl,
                comment: this.state.comment
            }
            this.state.gifCommentResponse.push(comment_user);
            console.log(this.state.gifCommentResponse);
            this.setState({ id: '', comment: '', gifSrcUrl: '' })
            this.handleModleClose()
        }
    }
    handleModleClose = () => {
        this.setState({ showModle: false })
    }
    componentDidMount() {
        axios.get(variable.api_url + "trending", {
            params: {
                api_key: variable.api_key,
                limit: 12
            }
        })
            .then((response) => {
                this.setState({ gifTrendingResponse: response.data.data })
            });
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-8 col-sm-12 col-12 mb-5'>
                    <div className='border rounded'>
                        <div className='m-4'>
                            <h3>Search Result</h3>
                            <hr />
                            <div className='row'>
                                {this.props.data.data.map(datas => (
                                    <div className='col-md-4 col-sm-12 col-12 mb-4' id={datas.id} key={datas.id}>
                                        <Image className='fix-img-size' src={datas.images.original.url}
                                            onClick={async () => {
                                                await this.setState({ gifSrcUrl: datas.images.original.url, id: datas.id })
                                                // console.log({url : this.state.gifSrcUrl, id : this.state.id})
                                                this.handleModleOpen()
                                            }} rounded></Image>
                                    </div>
                                ))}
                            </div>
                            <h3>Trending</h3>
                            <hr />
                            <div className='row'>
                                {this.state.gifTrendingResponse.map(datas => (
                                    <div className='col-md-4 col-sm-12 col-12 mb-4' id={datas.id} key={datas.id}>
                                        <Image className='fix-img-size' src={datas.images.original.url}
                                            onClick={async () => {
                                                await this.setState({ gifSrcUrl: datas.images.original.url, id: datas.id })
                                                // console.log({url : this.state.gifSrcUrl, id : this.state.id})
                                                this.handleModleOpen()
                                            }} rounded></Image>
                                    </div>
                                ))}
                            </div>
                            <Modal show={this.state.showModle} onHide={this.handleModleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title className='h5'>Selected Image: <span className='h6 text-info'>{this.state.id}</span></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='m-2'>
                                        <Image className='img-fluid border' src={this.state.gifSrcUrl}></Image>
                                        <textarea onChange={e => this.setState({ comment: e.target.value })} value={this.state.comment} placeholder='Write Your Comment Here' className="form-control mt-3" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="info" onClick={() => { this.handleSubmit() }}>
                                        Submit
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 col-12 mb-5'>
                    <SELETED_GIF data={this.state.gifCommentResponse} />
                </div>
            </div>
        );
    }
}

export default GIF_RESULT;