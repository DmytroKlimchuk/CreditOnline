import React, { Component } from 'react';
import './detail.css';
import { Link } from "react-router-dom";

class Detail extends Component {

    state = {
        items : this.props.data
    }
    
    selectClient = (item) => (event) => {
        console.log(item);
        this.props.setActive(item);
    }

    Search = (event) => {

        let { value } = event.target;
        //console.log( value );
       
        let newItems = this.state.items.filter( ( item ) => {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
        });

        console.log( newItems );

        this.setState({
            items: newItems
        })

    }

    item = this.state.items.map( (item) => {
        return (            
            <tr onClick={ this.selectClient(item) } key={item.name+item.surnname}>
                <td><Link to={ `/detail/${item.id}` }>{ item.name }</Link></td>
                <td><Link to={ `/detail/${item.id}` }>{ item.surname }</Link></td>
                <td><Link to={ `/detail/${item.id}` }>{ item.amount }</Link></td>
                <td><Link to={ `/detail/${item.id}` }>{ item.term }</Link></td>
            </tr>
        );
    });

    render () {
        return (
            <div className="detail">
                <input type="text" placeholder="Пошук по імені" onInput={ this.Search }/>
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