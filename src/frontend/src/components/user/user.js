import React, { Component } from 'react';
import ReviewList from '../reviewList/reviewList';
import { getUserReviews, getUserOrders } from '../../api';
import OrderList from '../orderList/orderList';

class User extends Component {

    constructor(props){
        super(props);
        this.state = {
            reviews: [],
            orders: [],
        }
    }

    componentWillMount(){
        getUserReviews().then(response => {
            this.setState({reviews: response.data.results});
        })
        getUserOrders().then(response => {
            this.setState({orders: response.data.results});
        })
    }

    render(){
        return(
            <div>
                <ReviewList title={"Your reviews:"} reviews={this.state.reviews} />
                <OrderList title={"Your orders:"} orders={this.state.orders} />
            </div>
        );
    }

}

export default User;