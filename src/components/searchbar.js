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
            gifSearchResponse : ''
        };
    };
    handleSearhButton = () => {
            axios.get(variable.api_url + "search", {
                params: {
                    api_key: variable.api_key,
                    q: this.state.searhInput,
                    limit: 9
                }
            })
                .then((response) => {
                    this.setState({gifSearchResponse : response.data.data})
                })
            }
    render() {
        return (
            <div>
                <nav className="navbar bg-light justify-content-center">
                    <div className='container'>
                        <div className="input-group p-3">
                            <input onChange={e => this.setState({ searhInput: e.target.value })} value={this.state.searhInput} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={() => { this.handleSearhButton() }} className="btn btn-outline-dark" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                </nav>
                <div className='container mt-3'>
                    <GIF_RESULT data = {this.state.gifSearchResponse}/>
                </div>
            </div>
        );
    }
}

export default SEARCHBAR;