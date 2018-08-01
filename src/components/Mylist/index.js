import React, { Component } from 'react';

class Mylist extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                {this.props.mylist.map(element=>{
                    return(
                        <div className="mylist-item-container">
                            <img className="mylist-image" src ={element.img}/>
                            <p className="mylist-p">{element.title}</p>
                            <button className="mylist-button" onClick={()=>this.props.removeItem(element.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }

}
export default Mylist;
