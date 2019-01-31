import React, { Component } from 'react';
import ReviewList from "../reviewList/reviewList";
import { getItem } from '../../api';


class ItemDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            item: {name: 0, price: 0, number_in_stock: 0, description: 0},
            reviews: [],
        };
    }

    componentWillMount(){
        getItem(this.props.match.params.id).then(response => {
            this.setState({item: response.data})
        });     
    }

    render(){
        return(
            <div>
                <h1>{this.state.item.name}</h1>
                <h2>{`price: ${this.state.item.price} --- ${this.state.item.number_in_stock} in stock`}</h2>
                <p>{this.state.item.description}</p>
                <ReviewList id={this.props.match.id} />
            </div>
        );
    }

}

export default ItemDetail;