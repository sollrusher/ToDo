import React from 'react';
import Item from '../item';

function Main({posts, onDelete, onToggleChecked}){

    const elements = posts.map((item) =>{
        return(
            <Item
            label={item.label}
            checked={item.checked}
            id={item.id}
            onDelete={() => onDelete(item.id)}
            onToggleChecked={() => onToggleChecked(item.id)}    />
        )
    });


    return(
    <div className="todoMain">                
        <ol className="todoList">
            {elements}
        </ol>
    </div>
    )
}

export default Main;