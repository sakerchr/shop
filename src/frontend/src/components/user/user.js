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
                <OrderList orders={this.state.orders} />
                <h4>Your Reviews:</h4>
                <ReviewList reviews={this.state.reviews} />
            </div>
        );
    }

}

export default User;