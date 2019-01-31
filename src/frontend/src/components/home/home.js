import React, { Component } from 'react';
import './home.css';
import { getItems } from '../../api';
import ItemsList from '../itemsList/itemsList';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categories: [],
        }
    }

    componentWillMount(){
        getItems().then(response => {
            this.setState({items: response.data.results})
        })        
    }

    render(){
        return(
            <div className="center home centerText">
                <h1>The Item Shop</h1>
                <ItemsList items={this.state.items} />
            </div>
        );
    }

}

export default Home;