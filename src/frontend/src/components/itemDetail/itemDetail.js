import React, { Component } from 'react';
import ReviewList from "../reviewList/reviewList";
import { getItem, getItemReviews } from '../../api';


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
            this.setState({item: response.data});
        });
        getItemReviews(this.props.match.params.id).then(response => {
            this.setState({reviews: response.data.results});
        })     
    }

    render(){
        return(
            <div>
                <h1>{this.state.item.name}</h1>
                <h3>{`price: ${this.state.item.price} --- ${this.state.item.number_in_stock} in stock`}</h3>
                <p>{this.state.item.description}</p>
                <h4>Reviews:</h4>
                <ReviewList title={"Item reviews:"} id={this.props.match.id} reviews={this.state.reviews}/>
            </div>
        );
    }

}

export default ItemDetail;