import React, { Component } from 'react';
import './clientInfo.css';

class ClientInfo extends Component {
    render () {
        return (
            <div className="contact-section">
                <form className="form-line">
                    <div className="form-group">
                        <label htmlFor="name">Client name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Client surname</label>
                        <input type="text" className="form-control" id="surname" placeholder="surname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Amount</label>
                        <input type="text" className="form-control" id="amount" placeholder="amount" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Terms</label>
                        <input type="text" className="form-control" id="term" placeholder="term" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit"><i className="fa fa-paper-plane"></i>Send</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ClientInfo;