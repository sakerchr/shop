import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class OrderList extends Component {

    render(){
        return(
            <div className="orderList center">
                <table>
                    <thead>
                        <tr>
                            <th>{this.props.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.orders.map((order) => {
                            return (
                            <tr>
                                <td>
                                    <Link to={`/order/${order.id}`}>
                                        {`${order.date}`}
                                    </Link>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default OrderList;