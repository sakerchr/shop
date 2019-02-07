import React, { Component } from 'react';
import { getOrder, getOrderItems } from '../../api';
import ItemsList from '../itemsList/itemsList';
import { Link } from 'react-router-dom';

class OrderDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            order: {date: 0, items: []},
            items: [],
        };
    }

    componentWillMount(){
        getOrder(this.props.match.params.id).then(response => {
            this.setState({order: response.data});
        });
        getOrderItems(this.props.match.params.id).then(response => {
            console.log(response);
            var items = response.data.results.filter((item) => {
                return this.state.order.items.includes(item.id);
            });
            this.setState({items: items});
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.order.date}</h1><br/>
                <ItemsList items={this.state.items} />
            </div>
        );
    }

}

export default OrderDetail;