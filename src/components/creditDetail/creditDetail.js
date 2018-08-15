import React, { Component } from 'react';
import './creditDetail.css';

class CreditDetail extends Component {
    render () {
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
                            <td>Name 1</td>
                            <td>Surname 1</td>
                            <td>100</td>
                            <td>12</td>
                            <td>Laan rate</td>
                            <td>Total laan</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CreditDetail;