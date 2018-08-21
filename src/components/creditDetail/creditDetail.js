import React, { Component } from 'react';
import './creditDetail.css';
import list from '../../data.json';
import Header from '../header/header';

class CreditDetail extends Component {

    state = {
        data: list
    }

    render () {
        console.log( this.props.match.params );

        let { id } = this.props.match.params;

        return (
            <div className="container">
                <div className="row">
                    <Header />
                </div>

                <div className="credit-detail">
                    <h3>Credit Detail</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Amount</th>
                                <th>Term</th>
                                <th>Laan rate</th>
                                <th>Total laan</th>
                            </tr>
                            <tr>
                                <td>{this.state.data[id].name }</td>
                                <td>{this.state.data[id].surname }</td>
                                <td>{this.state.data[id].amount }</td>
                                <td>{this.state.data[id].term }</td>
                                <td>{this.state.data[id].rate }</td>
                                <td>{this.state.data[id].total }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CreditDetail;