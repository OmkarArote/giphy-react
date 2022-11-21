import React from 'react';

// Self Defined Components
import GIF_RESULT from './gif_result';
import SEARCHBAR from './searchbar';
import SELETED_GIF from './selected_gif';

class INDEX_ENTRY_POINT extends React.Component {
    render() {
        return (
            <div>
                <SEARCHBAR />
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='border rounded'>
                                <div className='m-4'>
                                    <GIF_RESULT />
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='border rounded'>
                                <div className='m-4'>
                                    <SELETED_GIF />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default INDEX_ENTRY_POINT;