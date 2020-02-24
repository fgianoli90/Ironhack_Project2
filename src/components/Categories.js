import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Category extends Component {
    
    handleClick=(e)=>{
        // console.log(e)
        let category = e.target.value
        // console.log(category)
        this.props.selectTheCategory(category)
        
    }
    
    render() {
        console.log("Category")
        return (
            <div className="categories">
            <header><h1>Select a Category</h1></header>
            <div className="categories-buttons">
                <div className="column1">
                    
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Any Category" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Animals" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Cartoons" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="History" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Politics" /></Link>
                </div>
                <div className="column2">
                   
                    <Link to="/"><input type="button" onClick={this.handleClick} value="General Knowledge" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Books" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Film" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Mythology"/></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Science & Nature" /></Link>
                </div>
                <div className="column3">
                    
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Art"/></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Celebrities" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Geography" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Music" /></Link>
                    <Link to="/"><input type="button" onClick={this.handleClick} value="Sports" /></Link>
                </div>
                </div>    
            </div>
        );
    }
}

export default Category;