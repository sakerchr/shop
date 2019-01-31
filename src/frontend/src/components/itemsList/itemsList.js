import React, { Component } from 'react';
import './itemsList.css';


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
                                <td>{`${item.name} --- ${item.description}`}</td>
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