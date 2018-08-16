import React, { Component } from 'react';
import './detail.css';
import data from '../../data.json';

class Detail extends Component {

    state = {
        ad : data
    }

    selectClient = (event) => {
        console.log('click');
    }

    item = this.state.ad.map( (item) => {
        return (
            <tr onClick={ this.selectClient }>
                <td>{ item.name }</td>
                <td>{ item.surname }</td>
                <td>{ item.amount }</td>
                <td>{ item.term }</td>
            </tr>
        );
    });


    render () {
        console.log(this.state.ad);
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
                        
                        { this.item }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Detail;