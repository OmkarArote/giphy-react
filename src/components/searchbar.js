import React from 'react';

// Constants
import { variable } from '../constants'

// Self Defined Components
import GIF_RESULT from './gif_result';

// Pre Defined Components
import { toast } from 'react-toastify';
import axios from 'axios';

class SEARCHBAR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searhInput: '',
            gifSearchResponse:
            {
                data:
                    [
                        {
                            type: "gif",
                            id: 0,
                            url: "https://www.memecreator.org/static/images/memes/5321042.jpg",
                            images: {
                                original: {
                                    url: "https://www.memecreator.org/static/images/memes/5321042.jpg"
                                }
                            }
                        }
                    ]
            }
        };
    };
    handleSearhButton = () => {
        if (this.state.searhInput === '') {
            toast.error("Field is empty", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'foo-bar'
            })
        } else {
            axios.get(variable.api_url + "search", {
                params: {
                    api_key: variable.api_key,
                    q: this.state.searhInput,
                    limit: 9
                }
            })
                .then(async (response) => {
                    let gif_res = response.data;
                    await this.setState({ gifSearchResponse: gif_res }, () => {
                        console.log(this.state.gifSearchResponse);
                    });
                })
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar bg-light justify-content-center">
                    <div className='container'>
                        <div className="input-group p-3">
                            <input onChange={e => this.setState({ searhInput: e.target.value })} value={this.state.searhInput} type="text" className="form-control" placeholder="Search For GIF's !!!" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={() => { this.handleSearhButton() }} className="btn btn-dark" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </nav>
                <div className='container mt-5'>
                    <GIF_RESULT data={this.state.gifSearchResponse} />
                </div>
            </div>
        );
    }
}

export default SEARCHBAR;