import React, {Component} from 'react';
import Credits from "../credits/credits"
import Header from "../header/header"
import Footer from "../todo/footer/footer"
import Head from "../todo/head/head"
import Main from "../todo/main/main"


export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data : [
                    {label: 'First', checked: true, id: 1},
                    {label: 'Second',checked: false, id: 2},
                    {label: 'Third', checked: false, id: 3}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleChecked = this.onToggleChecked.bind(this);

        this.maxId=4;
    }

    deleteItem(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data:newArr
            }
        });
    }

    addItem(value){
        const newItem = {
            label: value,
            checked: false,
            id: this.maxId++
        }
        this.setState(({data}) =>{
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleChecked(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, checked: !old.checked}


        })
    }

    render(){
        return (
            <div>
            <Header/>
            <div className="todo">
                <Head
                    onAdd={this.addItem}    />
                <Main posts={this.state.data}
                        onDelete={this.deleteItem}
                        onToggleChecked={this.onToggleChecked}/>
                <Footer/>
            </div>
            <Credits/>
            </div>
        )
    }

}

