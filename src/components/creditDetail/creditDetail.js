import React, { Component } from 'react';
import './creditDetail.css';

class CreditDetail extends Component {

    render () {
        console.log( this.props.active );
        return (
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
                            <td>{ this.props.active.name }</td>
                            <td>{ this.props.active.surname }</td>
                            <td>{ this.props.active.amount }</td>
                            <td>{ this.props.active.term }</td>
                            <td>{ this.props.active.rate }</td>
                            <td>{ this.props.active.total }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CreditDetail;