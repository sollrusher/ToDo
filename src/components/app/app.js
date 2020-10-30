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
            ],
            filter: 'all',
            
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleChecked = this.onToggleChecked.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.FilterItem = this.FilterItem.bind(this);
        this.DeleteComplete = this.DeleteComplete.bind(this);
        this.AllComplete = this.AllComplete.bind(this);

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

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

    FilterItem(item, filter){
        
        if(filter === 'complete')
        {
            return item.filter(item => item.checked)
        }
        if(filter === 'active')
        {
            return item.filter(item => !item.checked)
        }
        if(filter === 'all')
        {
            return item
        }
       
    }

    DeleteComplete(){
        this.state.data.forEach(element => {
             if(element.checked)
             {
                 this.deleteItem(element.id)
             }
         });
     }

     AllComplete(){

        this.setState(({data}) =>{
            
                const newArr= data.map(element => {element.checked=true ;return element})
                
                return{
                    data: newArr
            }
            
            
        })
       
     }



    render(){

        const {filter, data} = this.state;
        const checks = data.filter((item) => item.checked).length;


        const show = this.FilterItem(data, filter);
        

        return (
            <div>
            <Header/>
            <div className="todo">
                <Head
                    onAdd={this.addItem}
                    AllComplete={this.AllComplete}    />
                <Main posts={show}
                        onDelete={this.deleteItem}
                        onToggleChecked={this.onToggleChecked}/>
                <Footer
                length={this.state.data.length - checks}
                filter={filter}
                onFilterSelect={this.onFilterSelect}
                data={data}
                DeleteComplete={this.DeleteComplete}/>
            </div>
            <Credits/>
            </div>
        )
    }

}

