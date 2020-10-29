import React from 'react';

function Head({onAdd}){
    return(
    <div className="todoHead">
        <button className="checkAll" onClick={() => onAdd('Hello')}>❯</button>
        <input type="text" placeholder="Введите то что вам нужно сделать" value="" className="inputTodo"/>
    </div>
    )
}

export default Head;