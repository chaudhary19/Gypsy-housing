import React from 'react';
import RejectedList from './RejectedList';

const Rejected:React.FunctionComponent =()=>{
    const style={
        marginLeft:'18rem'
    }
    return (
        <div style={style}>
            <p className ='text-6xl font-bold mt-3'>Rejected</p>
            <RejectedList />
        </div>
    );
}

export default Rejected;