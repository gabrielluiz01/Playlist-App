import React, { useState } from 'react';

const NewTaskInput = ({ onSubmit }) => {

    const [newItem, setNewItem] = useState('');

    function setNewTask({target}) {
        setNewItem(target.value);
    }

    function submit(e) {
        e.preventDefault();
        onSubmit(newItem);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input placeholder="nome da música" onChange={setNewTask}/>
                <button type="submit">Adicionar Música</button>
            </form>
        </div>
    )
};

export default NewTaskInput;