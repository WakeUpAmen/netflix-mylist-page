import React, { Component } from 'react';

class Recommendations extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
            {this.props.recommendations.map(element=>{
                return(
                    <div className="mylist-item-container">
                        <img className="mylist-image" src ={element.img}/>
                        <p className="mylist-p">{element.title}</p>
                        <button className="mylist-button" onClick={()=>this.props.addItem(element.id)}>Add</button>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Recommendations;
