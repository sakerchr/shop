import React, { Component } from 'react';
import './itemsList.css';
import { Link } from 'react-router-dom';


class ItemsList extends Component{

    render(){
        return(
            <div className="itemsList center">
                <table>
                    <thead>
                        <tr>
                            <th>Items:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item) => {
                            return (
                            <tr>
                                <td>
                                    <Link to={`/item/${item.id}`}>
                                        {`${item.name} --- ${item.description}`}
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

export default ItemsList;