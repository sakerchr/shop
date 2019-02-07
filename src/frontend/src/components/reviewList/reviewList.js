import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./reviewList.css";

class ReviewList extends Component {

    render(){
        return(
            <div className="reviewList center">
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>Rating:</th>
                            <th>Review:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reviews.map((review) => {
                            return (
                            <tr>
                                <td>{`${review.rating} / 5`}</td>
                                <td>
                                    <Link to={`/review/${review.id}`}>
                                        {review.text}
                                    </Link>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default ReviewList;