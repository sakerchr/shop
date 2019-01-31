import React, { Component } from 'react';
import './home.css';
import { getItems, getCategories } from '../../api';
import ItemsList from '../itemsList/itemsList';
import CategoryFilter from '../categoryFilter/categoryFilter';
import {Link} from 'react-router-dom';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categories: [],
            filteredItems: [],
        }
        this.onCategoryFilterChange = this.onCategoryFilterChange.bind(this);
    }

    componentWillMount(){
        getItems().then(response => {
            this.setState({items: response.data.results, filteredItems: response.data.results})
        });
        getCategories().then(reponse => {
            this.setState({categories: reponse.data.results})
        });   
    }

    onCategoryFilterChange = function(event){
        var category_id = parseInt(event.target.value);
        if (category_id == 0){
            this.setState({filteredItems: this.state.items});
            return;
        };
        var filteredItems = this.state.items.filter((item) => {
            return item.categories.includes(category_id);
        });
        this.setState({filteredItems: filteredItems});
    }

    render(){
        return(
            <div>
                <CategoryFilter categories={this.state.categories} onCategoryFilterChange={this.onCategoryFilterChange}/>
                <ItemsList items={this.state.filteredItems} />
            </div>
        );
    }

}

export default Home;