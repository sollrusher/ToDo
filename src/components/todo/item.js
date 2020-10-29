import React, {Component} from 'react';

export default class Item extends Component{
    constructor(props){
        super(props);
        this.state ={
            checked: false
        };
        this.onCheck= this.onCheck.bind(this);
    }


    render(){
        const {label, id, onDelete, onToggleChecked, checked} = this.props;
        let nameClass= "todoItem";

        if(checked){
            nameClass += ' active'
        }

        return(
        <li key={id} className= {nameClass}>

            <input type="checkbox" className='cheks' onClick={onToggleChecked}/>
            <label>{label}</label>
            <button className="delete" onClick={onDelete}></button>
    
    
        </li>
        )
    }
}
