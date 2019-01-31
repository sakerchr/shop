import React, { Component } from 'react';


class CategoryFilter extends Component{

    render() {
        return(
            <div>
                <label for="category-select">Filter by category: </label>
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