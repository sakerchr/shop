import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./orderList.css";


class OrderList extends Component {

    render(){
        return(
            <div className="orderList center">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Your orders:</th>
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
                </Table>
            </div>
        );
    }

}

export default OrderList;