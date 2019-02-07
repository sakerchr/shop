import React, { Component } from 'react';
import './itemsList.css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'


class ItemsList extends Component{

    render(){
        return(
            <div className="itemsList center">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Price:</th>
                            <th>Item:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item) => {
                            return (
                            <tr>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/item/${item.id}`}>
                                        {item.name}
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

export default ItemsList;