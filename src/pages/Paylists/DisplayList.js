import React from 'react';

const ListItem = ({ onChange, onDelete, value}) => {
    return (
        <div>
            <input value={value} onChange={onChange}/>
            <button onClick={onDelete}>Excluir Música</button>
        </div>
    );
};

export default ListItem;