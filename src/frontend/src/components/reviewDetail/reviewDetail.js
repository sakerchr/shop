import React, { Component } from 'react';
import { getReview } from '../../api';
import { Link } from 'react-router-dom';


class ReviewDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            review: {rating: 0, text: "", item: -1},
        };
    }

    componentWillMount(){
        getReview(this.props.match.params.id).then(response => {
            console.log(response);
            this.setState({review: response.data});
        }); 
    }

    render(){
        return(
            <div>
                <h1>{this.state.review.rating}</h1>
                <p>{this.state.review.text}</p>
                <Link to={`/item/${this.state.review.item}`}>To Item</ Link>
            </div>
        );
    }

}

export default ReviewDetail;