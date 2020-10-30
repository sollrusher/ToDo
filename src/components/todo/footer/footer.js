import React, {Component} from 'react';
import Filters from "./filters"

export default class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
            filter: "filter"
        }

            this.OnFilterAll = this.OnFilterAll.bind(this)
            this.OnFilterActive = this.OnFilterActive.bind(this)
            this.OnFilterComplete = this.OnFilterComplete.bind(this)

    }

    OnFilterAll(){
        this.setState(({filter}) =>{
            filter+=" selected"
        })
    }
    OnFilterActive(){
        this.setState(({filter}) =>{
            filter+=" selected"
        })
    }
    OnFilterComplete(){
        this.setState(({filter}) =>{
           const newfilter=filter+ " selected"
            return newfilter
        })
    }



    render(){
        const {length}=this.props;
        const {filter, onFilterSelect, DeleteComplete} = this.props;
        if(this.props.data[0]){
    return(
    <div className="todofooter">
                <div className="count">{length} items left</div>
                
                
                <Filters
                filter={filter}
                onFilterSelect={onFilterSelect}/>
                   
                <div className="clear" onClick={DeleteComplete}>Очистить выполненные</div>
    </div>
    )}
    else{
        return('')
    }
}
}

