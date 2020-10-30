import React, {Component} from 'react';

export default class Filters extends Component{
  constructor(props){
      super(props);
      this.buttons =[
          {name: 'all', label: "Все"},
          {name: 'active', label: "Активные"},
          {name: 'complete', label: "Выполненные"}
      ];
  }
  render(){

    const buttons = this.buttons.map(({name,label}) =>{
      const {filter, onFilterSelect} = this.props;
        const active = filter === name;
        const clazz = active ? "footerFilters selected" : "footerFilters"
        return(
          <a href="#a" className={clazz} key={name} onClick={()=> onFilterSelect(name)}>{label}</a>
        )
    })

    return(
      <div className="footerFilters">
        {buttons}
      </div>
        
    )
  }
}