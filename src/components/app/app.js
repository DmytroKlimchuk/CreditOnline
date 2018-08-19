import React from 'react';
import './app.css';

import Header from '../header/header';
import ClientInfo from '../clientInfo/clientInfo';
import CreditDetail from '../creditDetail/creditDetail';
import Detail from '../detail/detail';

import list from '../../data.json';

class App extends React.Component {

    state = {
        data : list,
        active : ''
    }

    setActive = ( value ) => {
        this.setState({
            active : value
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <Header />
                </div>
        
                <div className="row">
                    <div className="col col-sm-6">
                        <ClientInfo />
                    </div>
            
                    <div className="col col-sm-6">
                        <Detail data={ this.state.data } setActive={ this.setActive }/>
                    </div>
                </div>
        
                <div className="row">
                    <CreditDetail active={ this.state.active }/>
                </div>  
            </div>
        );
    }

}

export default App;