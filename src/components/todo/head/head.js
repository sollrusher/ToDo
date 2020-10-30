import React, {Component} from 'react';

export default class Head extends Component{
    constructor(props){
        super(props);


        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) {
        if (event.key === 'Enter') {

          this.props.onAdd(event.target.value);
          event.target.value=""
        }
      }


    render(){
const {AllComplete} = this.props;

    return(
    <div className="todoHead">
        <button className="checkAll" onClick={AllComplete}>❯</button>
        <input type="text" placeholder="Введите то что вам нужно сделать" className="inputTodo" onKeyPress={this.onValueChange}/>
    </div>
    )
}
}
