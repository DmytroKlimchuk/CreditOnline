import React, { Component } from 'react';
import './detail.css';

class Detail extends Component {
    render () {
        return (
            <div className="detail">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Amount</th>
                            <th>Term</th>
                        </tr>
                        <tr>
                            <td>Name 1</td>
                            <td>Surname 1</td>
                            <td>100</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Name 1</td>
                            <td>Surname 1</td>
                            <td>100</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Name 1</td>
                            <td>Surname 1</td>
                            <td>100</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Name 1</td>
                            <td>Surname 1</td>
                            <td>100</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Detail;