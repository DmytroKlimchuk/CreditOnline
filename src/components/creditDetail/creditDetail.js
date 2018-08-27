import React, { Component } from 'react';
import './creditDetail.css';
import list from '../../data.json';
import Header from '../header/header';

class CreditDetail extends Component {

    state = {
        data: list
    }

    render () {

        let { id } = this.props.match.params;

        let item = this.state.data.filter( (item) => item.id == id)[0];
        

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
                                <td>{ item.name }</td>
                                <td>{ item.surname }</td>
                                <td>{ item.amount }</td>
                                <td>{ item.term }</td>
                                <td>{ item.rate }</td>
                                <td>{ item.total }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CreditDetail;