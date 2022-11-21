import React from 'react';

// Self Defined Components

class SEARCHBAR extends React.Component {
    render() {
        return (
            <nav className="navbar bg-light justify-content-center">
                <div className='container'>
                    <div className="input-group p-3">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-dark" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SEARCHBAR;