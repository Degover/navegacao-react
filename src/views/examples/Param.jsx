import React from 'react';
import { useParams } from 'react-router';

const Param = props => {
    const { id } = useParams();
    return (
        <aside className="home">
            <h1>Param</h1>
            <h2>Valor: {id}!</h2>
        </aside>
    );
};

export default Param;
