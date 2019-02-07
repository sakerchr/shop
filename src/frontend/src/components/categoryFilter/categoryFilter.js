import React, { Component } from 'react';
import './categoryFilter.css';


class CategoryFilter extends Component{

    render() {
        return(
            <div className="categoryFilter">
                <label for="category-select">Filter by category: </label><br />
                <select id="category-select" onChange={this.props.onCategoryFilterChange}>
                    <option value={0} selected="selected">All</option>
                    {this.props.categories.map((category) => {
                        return <option value={category.id}>{category.name}</option>
                    })}
                </select>
            </div>
        );
    }

}


export default CategoryFilter