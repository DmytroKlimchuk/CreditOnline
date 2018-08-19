import React, { Component } from 'react';
import './detail.css';

class Detail extends Component {

    selectClient = (item) => (event) => {
        console.log(item);
        this.props.setActive(item);
    }

    item = this.props.data.map( (item) => {
        return (
            <tr onClick={ this.selectClient(item) } key={item.name+item.surnname}>
                <td>{ item.name }</td>
                <td>{ item.surname }</td>
                <td>{ item.amount }</td>
                <td>{ item.term }</td>
            </tr>
        );
    });

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
                        
                        { this.item }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Detail;