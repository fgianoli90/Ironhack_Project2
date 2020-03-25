import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap'


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
            <Container className="categories">
            <header><h1>Select a Category</h1></header>
            <Row className="categories-buttons">
                <Col className="column1" xs={6} md={4}>
                    
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Any Category" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Animals" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Cartoons" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="History" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Politics" /></Link>
                </Col>
                <Col className="column2" xs={6} md={4}>
                   
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="General Knowledge" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Books" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Film" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Mythology"/></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Science & Nature" /></Link>
                </Col>
                <Col className="column3" xs={6} md={4}>
                    
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Television"/></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Mathematics" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Geography" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Music" /></Link>
                    <Link to="/TriviaGame"><input type="button" onClick={this.handleClick} value="Sports" /></Link>
                </Col>
                </Row>    
            </Container>
        );
    }
}

export default Category;